/**
 * Created J/19/08/2010
 * Updated D/17/02/2013
 * Version 12
 *
 * Copyright 2008-2013 | Fabrice Creuzot (luigifab) <code~luigifab~info>
 * http://www.luigifab.info/apijs
 *
 * This program is free software, you can redistribute it or modify
 * it under the terms of the GNU General Public License (GPL) as published
 * by the free software foundation, either version 2 of the license, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but without any warranty, without even the implied warranty of
 * merchantability or fitness for a particular purpose. See the
 * GNU General Public License (GPL) for more details.
 */

apijs.core.bbcode = function () {

	// définition des attributs
	this.bbcode = null;
	this.object = null;
	this.fragment = null;
	this.emotes = false;


	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// GESTION DES DONNÉES

	// #### Initialisation ########################################################## public ### //
	// = révision : 13
	// » Prépare l'objet de transition
	// » Ajoute un conteneur p lorsque nécessaire
	// » Remplace '/]' par ']' (corrige l'interprétation des éventuels [br /] et [img /])
	this.init = function (data, emotes) {

		this.object = { tag: 'div', content: [] };
		this.object['class'] = 'bbcode';

		this.bbcode = (data[0] !== '[') ? '[p]' + data + '[/p]' : data;
		this.bbcode = this.bbcode.replace(/\\\]/g, ']');

		if ((apijs.config.bbcode !== null) && (typeof apijs.config.bbcode === 'object'))
			this.emotes = (typeof emotes === 'boolean') ? emotes : true;
	};


	// #### Interprétation et résultat ############################################## public ### //
	// = révision : 7
	// » Analyse le bbcode et génère le fragment DOM
	// » Renvoie le fragment DOM correspondant au bbcode
	this.getFragment = function () {

		this.readData(this.bbcode, 0);

		this.fragment = document.createDocumentFragment();
		this.fragment.appendChild(this.createDomFragment(this.object));

		return this.fragment;
	};




	///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	// GÉNÉRATION DE L'OBJET JS ET DU FRAGMENT DOM

	// #### Création de l'objet de transition ###################################### private ### //
	// = révision : 16
	// » Parcours le bbcode récursivement
	// » Découpe les données avec des expressions régulières
	// » Sauvegarde chaque élément et chaque bout de texte dans un tableau d'objets
	// » À bien noter qu'en JavaScript, les objets sont passés par référence, ils ne sont jamais copiés
	this.readData = function (data, level) {

		var element, attributes, content, text, other, cut;

		// *** Texte et éléments simples ou doubles ************* //
		// la chaine contient du texte suivit d'un ou plusieurs éléments
		// extrait le premier bout de texte, le premier élément et son contenu ainsi que ce qu'il y a après
		// auto-rappel pour analyser chaque morceau
		if ((data[0] !== '[') && ((cut = data.search(/\[([a-z1-6]+)(?: [a-z:]+=["'][^\]]*["'])*\]/)) > -1)) {

			// texte (auto-rappel)
			text = data.slice(0, cut);
			this.readData(text, level);

			// élément double (auto-rappel)
			other = data.slice(cut);

			if ((cut = other.indexOf('[/' + RegExp.$1 + ']')) > -1) {
				element = other.slice(0, cut + RegExp.$1.length + 3);
				other = other.slice(cut + RegExp.$1.length + 3);
				this.readData(element, level);
			}

			// élément simple (auto-rappel)
			if (/^(\[(?:area|br|col|hr|iframe|img|input|param)(?: [a-z:]+=["'][^\]]*["'])*\])/.test(other)) {
				element = other.slice(0, RegExp.$1.length);
				other = other.slice(RegExp.$1.length);
				this.readData(element, level);
			}

			// ce qu'il reste (auto-rappel)
			if (other.length > 0)
				this.readData(other, level);
		}

		// *** Élément simple *********************************** //
		// la chaine contient un élément simple en première position
		// extrait l'élément et ses attributs ainsi que ce qu'il y a après
		// demande la sauvegarde de l'élément et de ses attributs
		// auto-rappel pour analyser ce qu'il y a après
		else if (/^\[(area|br|col|hr|iframe|img|input|param)((?: [a-z:]+=["'][^\]]*["'])*)\]/.test(data)) {

			element = RegExp.$1;
			attributes = RegExp.$2;

			other = data.slice(2 + element.length + attributes.length);
			this.addElement(element, attributes, level);

			if (other.length > 0)
				this.readData(other, level);
		}

		// *** Élément double *********************************** //
		// la chaine contient un élément double en première position
		// extrait l'élément et ses attributs, son contenu ainsi que ce qu'il y a après
		// demande la sauvegarde de l'élément, de son contenu et de ses attributs
		// auto-rappel pour analyser son contenu et ce qu'il y a après
		else if (/^\[([a-z1-6]+)((?: [a-z:]+=["'][^\]]*["'])*)\]/.test(data)) {

			element = RegExp.$1;
			attributes = RegExp.$2;

			cut = data.indexOf('[/' + element + ']');
			content = data.slice(2 + element.length + attributes.length, cut);
			other = data.slice(3 + element.length + cut);

			this.addElement(element, attributes, level);
			this.readData(content, level + 1);

			if (other.length > 0)
				this.readData(other, level);
		}

		// *** Texte ******************************************** //
		// demande la sauvegarde du bout de texte
		else {
			this.addElement(data, null, level);
		}
	};


	// #### Ajoute un nœud élément ou un nœud texte ################################ private ### //
	// = révision : 14
	// » Enregistre le nœud élément et ses attributs ou le nœud texte dans le tableau d'objets
	// » Remplace les émoticônes lorsque nécessaire en fonction de la configuration
	// » À bien noter qu'en JavaScript, les objets sont passés par référence, ils ne sont jamais copiés
	this.addElement = function (data, attributes, level) {

		var directlink, attribute, name, value, hasEmotes = false, currentEmote = {};
		directlink = this.getContentNode(this.object, 0, level);

		// *** Nœud élément ************************************* //
		if (attributes !== null) {

			if (directlink.hasOwnProperty('content'))
				directlink.content.push({ tag: data });
			else
				directlink.content = [{ tag: data }];

			if (attributes.length > 5) {
				attributes = attributes.slice(1, -1).split(/["'] /);

				for (attribute in attributes) if (attributes.hasOwnProperty(attribute)) {

					name = attributes[attribute].slice(0, attributes[attribute].indexOf('='));
					value = attributes[attribute].slice(attributes[attribute].indexOf('=') + 2);

					if (directlink.hasOwnProperty('content'))
						directlink.content[directlink.content.length - 1][name] = value;
					else
						directlink[name] = value;
				}
			}
		}

		// *** Nœud texte *************************************** //
		else {
			// recherche des éventuels émoticônes
			if (this.emotes) {

				data = data.split(' ');

				for (value in data) if (data.hasOwnProperty(value)) {
					if (typeof data[value] === 'string') {
						if (apijs.config.bbcode.hasOwnProperty(data[value])) {
							hasEmotes = true;
							currentEmote = apijs.config.bbcode[data[value]];
							data[value] = '[img src="' + currentEmote.src + '" width="' + currentEmote.width + '" height="' + currentEmote.height + '" alt="' + data[value] + '" class="emote"]';
						}
						else if (apijs.config.bbcode.hasOwnProperty(data[value].slice(0, -1))) {
							hasEmotes = true;
							currentEmote = apijs.config.bbcode[data[value].slice(0, -1)];
							data[value] = '[img src="' + currentEmote.src + '" width="' + currentEmote.width + '" height="' + currentEmote.height + '" alt="' + data[value].slice(0, -1) + '" class="emote"]' + data[value].slice(-1);
						}
					}
				}

				data = data.join(' ');

				if (hasEmotes)
					this.readData(data, level);
				else if (directlink.hasOwnProperty('content'))
					directlink.content.push({ text: data });
				else
					directlink.content = [{ text: data }];
			}
			// texte seul
			else {
				if (directlink.hasOwnProperty('content'))
					directlink.content.push({ text: data });
				else
					directlink.content = [{ text: data }];
			}
		}
	};


	// #### Recherche le dernier nœud content ###################################### private ### //
	// = révision : 5
	// » Recherche le dernier nœud content de l'objet
	// » Ne va pas plus loin que le niveau maximum demandé
	this.getContentNode = function (dom, level, maxlevel) {

		if ((dom.content.length < 1) || (maxlevel < 1))
			return dom;

		var i = dom.content.length - 1;

		if (dom.content[i].hasOwnProperty('content') && (++level < maxlevel))
			return this.getContentNode(dom.content[i], level, maxlevel);

		return dom.content[i];
	};


	// #### Création du fragment DOM ############################################### private ### //
	// = révision : 16
	// » Crée récursivement les différents nœuds à partir du tableau d'objets
	// » Prend en charge les nœuds éléments et leurs attributs ainsi que les nœuds textes
	// » À bien noter qu'en JavaScript, les objets sont passés par référence, ils ne sont jamais copiés
	// » http://jsperf.com/create-nested-dom-structure
	this.createDomFragment = function (data) {

		var tag, attr, elem;

		// prépare un nœud élément ou renvoie un nœud texte
		if (data.hasOwnProperty('tag'))
			tag = document.createElement(data.tag);
		else
			return document.createTextNode(data.text);

		// extraction des données de l'élément
		// ajoute ses attributs et son nœud texte si nécessaire
		// prend en charge les liens à ouvrir dans un nouvel onglet
		for (attr in data) if (data.hasOwnProperty(attr)) {

			if (attr === 'text')
				tag.appendChild(document.createTextNode(data[attr]));

			if ((attr !== 'tag') && (attr !== 'text') && (attr !== 'content'))
				tag.setAttribute(attr, data[attr]);

			if ((data.tag === 'a') && (attr === 'class') && (data[attr].indexOf('popup') > -1)) {

				if (apijs.config.navigator)
					tag.addEventListener('click', openTab, false);
				else
					tag.setAttribute('onclick', 'window.open(this.href); return false;');
			}
		}

		// l'élément contient un ou plusieurs sous éléments
		// auto-rappel pour analyser chaque élément
		if (data.hasOwnProperty('content')) {

			for (elem = 0; elem < data.content.length; elem++)
				tag.appendChild(this.createDomFragment(data.content[elem]));
		}

		return tag;
	};
};
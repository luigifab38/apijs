/**
 * Created S/05/06/2010
 * Updated V/01/01/2021
 *
 * Copyright 2008-2021 | Fabrice Creuzot (luigifab) <code~luigifab~fr>
 * https://www.luigifab.fr/apijs
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

apijs.core.i18n = function () {

	"use strict";
	this.data = {
		// https://docs.google.com/spreadsheets/d/1UUpKZ-YAAlcfvGHYwt6aUM9io390j0-fIL0vMRh1pW0/edit?usp=sharing
		// auto start
		cs: {
			103: "Zrušit",
			104: "Potvrzení",
			105: "Zavřít",
			106: "Předchozí",
			107: "Následující",
			132: "video stopa",
			133: "zvuková stopa",
			134: "titulky",
			142: "předchozí/následující",
			144: "zpět/vpřed",
			146: "ztlumit",
			149: "Konec",
			150: "Esc"
		},
		de: {
			103: "Abbrechen",
			104: "Bestätigen",
			105: "Schließen",
			106: "Vorheriges",
			107: "Nächstes",
			108: "Datei wählen",
			109: "Dateien wählen",
			124: "Verarbeitung läuft...",
			132: "videospur",
			133: "audiospur",
			134: "untertitel",
			142: "vorheriges/nächstes",
			143: "wiedergabe/pause",
			144: "rückwärts/vorwärts",
			145: "leiser/lauter",
			146: "ton aus",
			147: "vollbild",
			148: "beenden",
			149: "Ende",
			150: "Esc",
			161: "Alle Dateien wurden akzeptiert.",
			162: "Akzeptiertes Dateiformat: §.",
			163: "Akzeptiertes Dateiformate: § und §.",
			164: "Maximale Größe: § MB.",
			167: "Unerlaubtes Format",
			168: "Format zu gross",
			169: "Leere Datei",
			181: "§% - § kB/s - Noch § Minuten",
			182: "§% - § kB/s - Noch § Minute",
			183: "§% - § kB/s - Noch § Sekunden",
			185: "§% - bis § kB/s in § Minuten",
			186: "§% - bis § kB/s in § Minute",
			187: "§% - bis § kB/s in § Sekunden",
			188: "§% - bis § kB/s",
			191: "Abbrechen",
			192: "Sind Sie sicher? [span]Ja[/span] - Nein",
			193: "Es ist ein unerwarteter Fehler aufgetreten... Bitte versuchen Sie es noch einmal.",
			194: "Es ist ein Fehler beim Senden.",
			195: "Es ist ein Fehler bei der Verarbeitung.",
			196: "Wir laden Sie ein es erneut zu [a §]versuchen[/a]."
		},
		en: {
			102: "Ok",
			103: "Cancel",
			104: "Confirm",
			105: "Close",
			106: "Previous",
			107: "Next",
			108: "Choose a file",
			109: "Choose one or multiple files",
			124: "Operation in progress...",
			125: "Upload in progress...",
			126: "Processing file in progress...",
			127: "Drag and drop your files here",
			131: "video",
			132: "video track",
			133: "audio track",
			134: "subtitles",
			135: "off",
			141: "first/last",
			142: "previous/next",
			143: "play/pause",
			144: "backward/forward",
			145: "decrease/increase the volume",
			146: "mute",
			147: "full screen",
			148: "quit",
			149: "End",
			150: "Escape",
			161: "All files are accepted.",
			162: "Accepted file format: §.",
			163: "Accepted file formats: § and §.",
			164: "Maximum size: § MB.",
			165: "Maximum size by file: § MB.|Total maximum size: § MB.",
			166: "§ MB",
			167: "Format not allowed",
			168: "Size too large",
			169: "File empty",
			181: "§% - § kB/s - § minutes left",
			182: "§% - § kB/s - § minute left",
			183: "§% - § kB/s - § seconds left",
			184: "§% - § kB/s",
			185: "§% - at § kB/s in § minutes",
			186: "§% - at § kB/s in § minute",
			187: "§% - at § kB/s in § seconds",
			188: "§% - at § kB/s",
			191: "Interrupt",
			192: "Are you sure? [span]Yes[/span] - No",
			193: "It seems that an unlikely mistake just happened... Please try again.",
			194: "An error occurred while sending.",
			195: "An error occurred while processing.",
			196: "We invite you to [a §]try again[/a]."
		},
		es: {
			102: "Aceptar",
			103: "Cancelar",
			104: "Confirmar",
			105: "Cerrar",
			106: "Anterior",
			107: "Siguiente",
			108: "Elegir un fichero",
			109: "Elegir uno o varios ficheros",
			124: "Operación en curso...",
			125: "Envío en progreso...",
			126: "Tratamiento en curso...",
			131: "vídeo",
			132: "pista de vídeo",
			133: "pista de audio",
			134: "subtítulos",
			142: "anterior/siguiente",
			143: "reproducir/pausa",
			144: "retroceder/avanzar",
			145: "bajar/subir volumen",
			146: "silenciar",
			147: "pantalla completa",
			148: "salir",
			149: "Fin",
			150: "Esc",
			161: "Se aceptan todos los archivos.",
			162: "Formato de archivo aceptado: §.",
			163: "Formatos de archivos aceptados: § y §.",
			164: "Tamaño máximo: § MB.",
			165: "Tamaño máximo por fichero: § Mo.|Tamaño máximo total: § Mo.",
			167: "Formato no autorizado",
			168: "Tamaño demasiado importante",
			169: "Fichero vacío",
			181: "§% - § kB/s - § minutos restantes",
			182: "§% - § kB/s - § minuto restantes",
			183: "§% - § kB/s - § segundos restantes",
			185: "§% - a § kB/s en § minutos",
			186: "§% - a § kB/s en § minuto",
			187: "§% - a § kB/s en § segundos",
			188: "§% - a § kB/s",
			191: "Interrumpir",
			192: "¿Está seguro(a)? [span]Sí[/span] - No",
			193: "Parece que un error improbable acabo de ocurrir... Por favor, inténtelo de nuevo.",
			194: "Se produjo un error durante el envío.",
			195: "Se produjo un error durante el procesamiento.",
			196: "Le invitamos a [a §]intentar de nuevo[/a]."
		},
		fr: {
			103: "Annuler",
			104: "Valider",
			105: "Fermer",
			106: "Précédent",
			107: "Suivant",
			108: "Choisir un fichier",
			109: "Choisir un ou plusieurs fichiers",
			124: "Opération en cours...",
			125: "Envoi en cours...",
			126: "Traitement en cours...",
			127: "Faites glisser et déposez vos fichiers ici",
			131: "vidéo",
			132: "piste vidéo",
			133: "piste audio",
			134: "sous-titres",
			141: "premier/dernier",
			142: "précédent/suivant",
			143: "lecture/pause",
			144: "reculer/avancer",
			145: "réduire/augmenter le volume",
			146: "couper le son",
			147: "plein écran",
			148: "quitter",
			149: "Fin",
			150: "Échap",
			161: "Tous les fichiers sont acceptés.",
			162: "Format de fichier accepté : §.",
			163: "Formats de fichier acceptés : § et §.",
			164: "Taille maximale : § Mo.",
			165: "Taille maximale par fichier : § Mo.|Taille maximale total : § Mo.",
			166: "§ Mo",
			167: "Format non autorisé",
			168: "Taille trop importante",
			169: "Fichier vide",
			181: "§% - § ko/s - § minutes restantes",
			182: "§% - § ko/s - § minute restante",
			183: "§% - § ko/s - § secondes restantes",
			184: "§% - § ko/s",
			185: "§% - à § ko/s en § minutes",
			186: "§% - à § ko/s en § minute",
			187: "§% - à § ko/s en § secondes",
			188: "§% - à § ko/s",
			191: "Interrompre",
			192: "Êtes-vous sûr(e) ? [span]Oui[/span] - Non",
			193: "Il semblerait qu'une erreur improbable vient de se produire... Veuillez réessayer.",
			194: "Une erreur est survenue lors de l'envoi.",
			195: "Une erreur est survenue lors du traitement.",
			196: "Nous vous invitons à [a §]réessayer[/a]."
		},
		it: {
			103: "Annulla",
			104: "Conferma",
			105: "Chiudi",
			106: "Precedente",
			107: "Successivo",
			108: "Scegli un file",
			109: "Scegli uno o più file",
			124: "Operazione in corso...",
			125: "Invio in corso...",
			126: "Trattamento in corso...",
			132: "traccia video",
			133: "traccia audio",
			134: "sottotitoli",
			142: "precedente/successivo",
			143: "riproduci/pausa",
			144: "indietro/avanti",
			145: "riduci/aumenta volume",
			146: "silenzio",
			147: "schermo intero",
			148: "esci",
			149: "Fine",
			150: "Esc",
			161: "Tutti i file sono accettati.",
			162: "Formato del file accettato: §.",
			163: "Formati accettati: § et §.",
			164: "Dimensione massima: § MB.",
			167: "Formato non autorizzato",
			168: "Dimensione troppo importante",
			169: "File vuoto",
			181: "§% - § kB/s - § minuti rimanenti",
			182: "§% - § kB/s - § minuto rimanente",
			183: "§% - § kB/s - § secondi rimanenti",
			185: "§% - a § kB/s in § minuti",
			186: "§% - a § kB/s in § minuto",
			187: "§% - a § kB/s in § secondi",
			188: "§% - a § kB/s",
			191: "Interrompere",
			192: "Sei sicuro? [span]Si[/span] - No",
			193: "Sembra che un errore inaspettato si sia verificato... Riprova.",
			194: "Un errore si è verificato durante l'invio.",
			195: "Un errore si è verificato durante il trattamento.",
			196: "Vi invitiamo a [a §]riprovare[/a]."
		},
		ja: {
			103: "キャンセル",
			104: "承認",
			105: "閉じる",
			106: "前へ",
			107: "次へ",
			131: "ビデオ",
			132: "ビデオトラック",
			133: "オーディオトラック",
			134: "字幕",
			142: "前へ/次へ",
			144: "戻る/進む",
			146: "ミュート",
			147: "全画面表示",
			149: "終了",
			150: "Esc",
			166: "§ Mo",
			184: "§% - § Ko/s",
			192: "よろしいですか？[span]はい[/span] - いいえ"
		},
		nl: {
			103: "Annuleren",
			104: "Bevestigen",
			105: "Sluiten",
			106: "Vorige",
			107: "Volgende",
			132: "videospoor",
			133: "audiospoor",
			134: "ondertitels",
			142: "vorige/volgende",
			144: "achteruit/vooruit",
			145: "volume omlaag/omhoog",
			146: "dempen",
			147: "schermvullend",
			150: "Esc"
		},
		pl: {
			103: "Anuluj",
			104: "Potwierdź",
			105: "Zamknij",
			106: "Poprzedni",
			107: "Następny",
			131: "obraz",
			132: "ścieżka obrazu",
			133: "ścieżka dźwiękowa",
			134: "napisy",
			142: "poprzedni/następny",
			144: "wstecz/przodu",
			145: "ciszej/głośniej",
			146: "wycisz",
			147: "pełny ekran",
			150: "Esc"
		},
		pt: {
			103: "Cancelar",
			104: "Confirmar",
			105: "Fechar",
			106: "Anterior",
			107: "Seguinte",
			108: "Escolher um ficheiro",
			109: "Escolher um ou vários ficheiros",
			124: "Operação em processo...",
			125: "Envio em processo...",
			126: "Tratamento em processo...",
			131: "vídeo",
			132: "faixa de vídeo",
			133: "faixa de áudio",
			134: "legendas",
			142: "anterior/seguinte",
			143: "reprodução/pausa",
			144: "recuar/avançar",
			145: "diminuir/aumentar volume",
			146: "sem som",
			147: "ecrã completo",
			148: "sair",
			149: "Fim",
			150: "Esc",
			161: "Todos os ficheiros foram aceites.",
			162: "Formato do ficheiro aceite: §.",
			163: "Formatos de ficheiro aceites: § e §.",
			164: "Tamanho máximo: § MB.",
			181: "§% - § kB/s - § minutos restantes",
			182: "§% - § kB/s - § minuto restantes",
			183: "§% - § kB/s - § segundos restantes",
			185: "§% - § kB/s em § minutos",
			186: "§% - § kB/s em § minuto",
			187: "§% - § kB/s em § segundos",
			188: "§% - § kB/s",
			192: "Tem a certeza? [span]Sim[/span] - Não",
			193: "Parece ter acontecido um erro imprevisto. Por favor, tente novamente.",
			194: "Ocorreu um erro ao enviar.",
			195: "Ocorreu um erro ao processar.",
			196: "Convidamo-lo a [a §]tentar novamente[/a]."
		},
		ptbr: {
			107: "Próximo",
			124: "Operação em andamento...",
			125: "Envio em andamento...",
			126: "Tratamento em andamento...",
			132: "trilha de vídeo",
			133: "trilha de áudio",
			142: "anterior/próximo",
			144: "retroceder/avançar",
			146: "sem áudio",
			147: "tela inteira",
			149: "Final"
		},
		ru: {
			102: "Ок",
			103: "Отмена",
			104: "Подтвердить",
			105: "Закрыть",
			106: "Предыдущий",
			107: "Следующий",
			108: "Выберите файл",
			124: "Операция в процессе...",
			131: "видео",
			132: "видеодорожка",
			133: "аудиодорожка",
			134: "субтитры",
			142: "предыдущий/следующий",
			143: "воспроизведение/пауза",
			144: "назад/вперед",
			145: "понизить/повысить громкость",
			146: "выключить звук",
			147: "полноэкранный режим",
			148: "выйти",
			150: "Esc",
			161: "Все файлы приняты.",
			162: "Формат файла: §.",
			163: "Форматы файлов: § и §.",
			164: "Максимальный размер: § MB.",
			181: "§% - § kB/s - осталось § минут",
			182: "§% - § kB/s - осталось § минут",
			183: "§% - § kB/s - осталось § секунд",
			185: "§% - § kB/s за § минут",
			186: "§% - § kB/s за § минут",
			187: "§% - § kB/s за § секунд",
			188: "§% - § kB/s",
			192: "Вы уверены? [span]Да[/span] - нет",
			193: "Кажется произошла не предусмотренная ошибка... Попробуйте еще раз.",
			194: "Возникла ошибка при отправке файла.",
			195: "Возникла ошибка при обработке файла."
		},
		sk: {
			103: "Zrušiť",
			104: "Potvrdiť",
			105: "Zavrieť",
			106: "Dozadu",
			107: "Ďalej",
			133: "zvuková stopa",
			134: "titulky",
			142: "dozadu/ďalej",
			144: "dozadu/dopredu",
			145: "znizit/zvysit hlasitost",
			146: "stlmiť",
			150: "Esc"
		},
		tr: {
			103: "İptal",
			104: "Onayla",
			105: "Kapat",
			106: "Önceki",
			107: "Sonraki",
			131: "görüntü",
			132: "görüntü kaydı",
			133: "ses kaydı",
			134: "altyazılar",
			142: "önceki/sonraki",
			144: "geri/i̇leri",
			145: "ses kısar/açar",
			146: "sesi kapatma",
			147: "tam ekran",
			149: "Son",
			150: "Esc",
			192: "Emin misiniz ? [span]Evet[/span] - Hayır"
		},
		uk: {
			103: "Відмінити",
			104: "Підтвердити",
			105: "Закрити",
			106: "Попередній",
			107: "Наступний",
			131: "відео",
			132: "відеодоріжка",
			133: "звукова доріжка",
			134: "субтитри",
			142: "попередній/наступний",
			144: "назад/вперед",
			145: "зменшити/збільшити гучність",
			146: "вимкнути звук",
			149: "Кінець",
			150: "Esc"
		},
		zh: {
			103: "取消",
			104: "确认",
			105: "关闭",
			106: "上一个",
			107: "下一个",
			131: "视频",
			132: "视频轨道",
			133: "音频轨道",
			134: "字幕",
			142: "上一个/下一个",
			144: "快退/快进",
			145: "音量减/增",
			146: "静音",
			147: "全屏",
			150: "Esc",
			192: "您确定吗？[span]是[/span] - 否"
		}
		// auto end
	};

	this.init = function () {

		var value = apijs.config.lang, html = document.querySelector('html');

		if (value.indexOf('auto') > -1) {
			value = html.getAttribute('xml:lang') || html.getAttribute('lang'); // pt-BR fr-FR
			if (typeof value == 'string') {
				value = value.replace(/[-_]/g, '').toLowerCase();
				value = value.slice(0, 4);      // ptbr frfr
				if (!this.data.hasOwnProperty(value))
					value = value.slice(0, 2); // pt   fr
				if (this.data.hasOwnProperty(value))
					apijs.config.lang = value;
			}
		}

		if (!this.data.hasOwnProperty(value))
			apijs.config.lang = 'en';
	};


	// TRADUIT (public return string|domelement|boolean)

	this.translate = function (word) {

		var lang = apijs.config.lang, idx = 1, translation = '';

		// mot clef inexistant dans la langue configurée
		// test avec la langue par défaut pour éventuellement continuer
		if (typeof this.data[lang][word] != 'string') {
			if ((lang.length > 3) && (typeof this.data[lang.slice(0, 2)][word] == 'string'))
				lang = lang.slice(0, 2);
			else if ((lang !== 'en') && (typeof this.data.en[word] == 'string'))
				lang = 'en';
			else
				return word;
		}

		// chaîne de caractères configurable
		if (arguments.length > 1) {
			this.data[lang][word].split('§').forEach(function (data) {
				translation += (idx < this.length) ? data + this[idx++] : data;
			}, arguments); // pour que ci-dessus this = arguments
			return translation;
		}

		// chaîne de caractères simple
		return this.data[lang][word];
	};

	this.translateNode = function () {

		// apply fait une copie des arguments
		// c'est comme si on avait appelé this.translate directement
		return document.createTextNode(this.translate.apply(this, arguments));
	};

	this.changeLang = function (lang) {

		if (typeof lang == 'string') {

			if (lang.indexOf('auto') > -1) {
				apijs.config.lang = 'auto';
				this.init();
				return true;
			}

			lang = lang.replace(/[-_]/g, '');

			if (this.data.hasOwnProperty(lang)) {
				apijs.config.lang = lang;
				return true;
			}
		}

		return false;
	};
};
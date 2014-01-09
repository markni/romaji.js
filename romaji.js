"use strict";


(function () {
    var root = this;

    var previousRomaji = root.romaji;

    var romaji;

    if (typeof exports !== 'undefined') {
        romaji = exports;
    } else {
        romaji = root.romaji = {};
    }

    romaji.version = '0.2.1';
    romaji.mode = 'hepburn';








    //helper functions

    var swapJsonKeyValues = function (input) {
        var one, output = {};
        for (one in input) {
            if (input.hasOwnProperty(one)) {
                output[input[one]] = one;
            }
        }
        return output;
    }


    var replaceAll = function (find, replace, str) {
        return str.replace(new RegExp(find, 'g'), replace);
    }



    //maps
    var toKanaMap = {};

    toKanaMap.hiragana = {
        //Digraphs

        "きゃ": "kya",
        "しゃ": "sha",
        "ちゃ": "cha",
        "にゃ": "nya",
        "ひゃ": "hya",
        "みゃ": "mya",
        "りゃ": "rya",
        "ぎゃ": "gya",
        "ふゅ": "fyu",

        "びゃ": "bya",
        "ぴゃ": "pya",

        "きゅ": "kyu",
        "しゅ": "shu",
        "ちゅ": "chu",
        "にゅ": "nyu",
        "ひゅ": "hyu",
        "みゅ": "myu",
        "りゅ": "ryu",
        "ぎゅ": "gyu",

        "びゅ": "byu",
        "ぴゅ": "pyu",

        "きょ": "kyo",
        "しょ": "sho",
        "ちょ": "cho",
        "にょ": "nyo",
        "ひょ": "hyo",
        "みょ": "myo",
        "りょ": "ryo",
        "ぎょ": "gyo",

        "びょ": "byo",
        "ぴょ": "pyo",



        "つぁ": "tsa",
        "つぃ": "tsi",
        "つぇ": "tse",
        "つぉ": "tso",

        "ちぇ": "che",
        "しぇ": "she",


        "じゃ": "ja",
        "じゅ": "ju",
        "じょ": "jo",

        "ふぁ": "fa",
        "ふぃ": "fi",
        "ふぇ": "fe",
        "ふぉ": "fo",


        "うぃ": "wi",


        // obsoleted kana
        "ゑ": "we",

        "うぇ": "we",

        "うぉ": "wo",

        "ゔぁ": "va",
        "ゔぃ": "vi",
        "ゔぇ": "ve",
        "ゔぉ": "vo",

        "じぇ": "je",
        "てぃ": "ti",
        "でぃ": "di",
        "でゅ": "du",
        "とぅ": "tu",

        //Monographs

        "し": "shi",
        "ち": "chi",
        "つ": "tsu",


        "か": "ka",
        "さ": "sa",
        "た": "ta",
        "な": "na",
        "は": "ha",
        "ま": "ma",
        "ら": "ra",

        "き": "ki",

        "に": "ni",
        "ひ": "hi",
        "み": "mi",
        "り": "ri",

        "く": "ku",

        "す": "su",

        "ぬ": "nu",
        "ふ": "fu",
        "む": "mu",
        "る": "ru",

        "け": "ke",
        "せ": "se",
        "て": "te",
        "ね": "ne",
        "へ": "he",
        "め": "me",
        "れ": "re",

        "こ": "ko",
        "そ": "so",
        "と": "to",
        "の": "no",
        "ほ": "ho",
        "も": "mo",
        "ろ": "ro",

        "わ": "wa",
        "を": "wo",



        "が": "ga",
        "ざ": "za",
        "だ": "da",
        "ば": "ba",
        "ぱ": "pa",

        "ぎ": "gi",


        "ぢ": "ji",
        //じ is more common to use, so it goes secondly
        // when we build toHiraganaMap, this will get overwriiten by second one

        "じ": "ji",



        "び": "bi",
        "ぴ": "pi",

        "ぐ": "gu",
        "ず": "zu",
        "づ": "zu",
        "ぶ": "bu",
        "ぷ": "pu",

        "げ": "ge",
        "ぜ": "ze",
        "で": "de",
        "べ": "be",
        "ぺ": "pe",

        "ご": "go",
        "ぞ": "zo",
        "ど": "do",
        "ぼ": "bo",
        "ぽ": "po",

        "や": "ya",
        "ゆ": "yu",
        "よ": "yo",





        "あ": "a",
        "い": "i",
        "う": "u",
        "え": "e",
        "お": "o",
        "ん": "n"


    }

    toKanaMap.katakana = {
        "キャ": "kya",
        "シャ": "sha",
        "チャ": "cha",
        "ニャ": "nya",
        "ヒャ": "hya",
        "ミャ": "mya",
        "リャ": "rya",
        "ギャ": "gya",

        "ビャ": "bya",
        "ピャ": "pya",

        "キュ": "kyu",
        "シュ": "shu",
        "チュ": "chu",
        "ニュ": "nyu",
        "ヒュ": "hyu",
        "ミュ": "myu",
        "リュ": "ryu",
        "ギュ": "gyu",

        "ビュ": "byu",
        "ピュ": "pyu",

        "キョ": "kyo",
        "ショ": "sho",
        "チョ": "cho",
        "ニョ": "nyo",
        "ヒョ": "hyo",
        "ミョ": "myo",
        "リョ": "ryo",
        "ギョ": "gyo",

        "ビョ": "byo",
        "ピョ": "pyo",

		"フュ": "fyu",

		"ツァ": "tsa",
		"ツィ": "tsi",
		"ツェ": "tse",
		"ツォ": "tso",

		"チェ": "che",
		"シェ": "she",

		"シ": "shi",
		"チ": "chi",
		"ツ": "tsu",

		"ジョ": "jo",
		"ジャ": "ja",
		"ジュ": "ju",

        "ファ": "fa",
        "フィ": "fi",
        "フェ": "fe",
        "フォ": "fo",


        "ウィ": "wi",
        "ウェ": "we",
        "ウォ": "wo",



        "ヴァ": "va",
        "ヴィ": "vi",
        "ヴェ": "ve",
        "ヴォ": "vo",



        "ジェ": "je",
        "ティ": "ti",
        "ディ": "di",
        "デュ": "du",
        "トゥ": "tu",


        //basic


        "カ": "ka",
        "サ": "sa",
        "タ": "ta",
        "ナ": "na",
        "ハ": "ha",
        "マ": "ma",
        "ラ": "ra",


        "キ": "ki",

        "ニ": "ni",
        "ヒ": "hi",
        "ミ": "mi",
        "リ": "ri",


        "ク": "ku",
        "ス": "su",

        "ヌ": "nu",
        "フ": "fu",
        "ム": "mu",
        "ル": "ru",


        "ケ": "ke",
        "セ": "se",
        "テ": "te",
        "ネ": "ne",
        "ヘ": "he",
        "メ": "me",
        "レ": "re",


        "コ": "ko",
        "ソ": "so",
        "ト": "to",
        "ノ": "no",
        "ホ": "ho",
        "モ": "mo",
        "ロ": "ro",

        "ワ": "wa",
        "ヲ": "wo",


        "ガ": "ga",
        "ザ": "za",
        "ダ": "da",
        "バ": "ba",
        "パ": "pa",

        "ギ": "gi",
        "ジ": "ji",
        "ヂ": "ji",
        "ビ": "bi",
        "ピ": "pi",

        "グ": "gu",
        "ズ": "zu",
        "ヅ": "zu",
        "ブ": "bu",
        "プ": "pu",

        "ゲ": "ge",
        "ぜ": "ze",
        "デ": "de",
        "ベ": "be",
        "ペ": "pe",

        "ゴ": "go",
        "ゾ": "zo",
        "ド": "do",
        "ボ": "bo",
        "ポ": "po",

        "ャ": "ya", "ヤ": "ya",
        "ュ": "yu", "ユ": "yu",
        "ョ": "yo", "ヨ": "yo",




		"ン": "n",
		"ア": "a",
		"イ": "i",
		"ウ": "u",
		"エ": "e",
		"オ": "o",

		// obsoleted kana


		"ヱ": "we",
		"ヹ": "ve"


	}


    var longVowelsMap = {
        'a': 'ā',
        'e': 'ē',
        'i': 'ī',
        'o': 'ō',
        'u': 'ū'
    }


    //rebuild map by switching key and value
    var toHiraganaMap = swapJsonKeyValues(toKanaMap.hiragana);
    var toKatakanaMap = swapJsonKeyValues(toKanaMap.katakana);





    romaji.noConflict = function () {
        root.romaji = previousRomaji;
        return this;
    }


    //main functions


    romaji.toHiragana = function (romaji) {
        var result = romaji.toLowerCase();


        //replace the sokuon (doubling)
        result = result.replace(/((?![aeiou])[a-z])\1{1}/g,'っ$1')

        for (var r in toHiraganaMap) {
            result = replaceAll(r, toHiraganaMap[r], result);
        }



        return result;


    };

    romaji.toKatakana = function (romaji) {
        var result = romaji.toLowerCase();



		for (var r in toKatakanaMap) {
			result = replaceAll(r, toKatakanaMap[r], result);
		}



		return result;

    };

    romaji.fromKana = function (kana) {

        var result = kana;

        var longVowelsReplacer = function (match, p1) {
            return longVowelsMap[p1];
        }

        //basic dictionary matching
        for (var index in toKanaMap) {
            for (var s in toKanaMap[index]) {
                result = replaceAll(s, toKanaMap[index][s], result);
            }
        }

        //replace long vowels
        result = result.replace(/([aeiou])ー/g, longVowelsReplacer);

        //replace the sokuon (doubling)
        result = result.replace(/(ッ|っ)([a-z])/g, "$2$2");


        return result;

    }

    romaji.convert = function (s) {
        console.warn('WARNING: romaji.convert() is deprecated, please use romjia.fromKana()');
        return romaji.fromKana(s);
    }



}).call(this);


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

    romaji.version = '0.2.0';

    romaji.noConflict = function () {
        root.romaji = previousRomaji;
        return this;
    }


    romaji.convert = function (syllabary) {

        var result = syllabary;

        var dics = {};

        dics.hiragana = {
            //combined first
            "きゃ": "kya",
            "しゃ": "sha",
            "ちゃ": "cha",
            "にゃ": "nya",
            "ひゃ": "hya",
            "みゃ": "mya",
            "りゃ": "rya",
            "ぎゃ": "gya",
            "じゃ": "ja",
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
            "じゅ": "ju",
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
            "じょ": "jo",
            "びょ": "byo",
            "ぴょ": "pyo",


            "ふぁ": "fa",
            "ふぃ": "fi",
            "ふぇ": "fe",
            "ふぉ": "fo",
            "ふゅ": "fyu",

            "うぃ": "wi",
            "うぇ": "we",
            "うぉ": "wo",

            "ゔぁ": "va",
            "ゔぃ": "vi",
            "ゔぇ": "ve",
            "ゔぉ": "vo",

            "つぁ": "tsa",
            "つぃ": "tsi",
            "つぇ": "tse",
            "つぉ": "tso",

            "ちぇ": "che",
            "しぇ": "she",
            "じぇ": "je",
            "てぃ": "ti",
            "でぃ": "di",
            "でゅ": "du",
            "とぅ": "tu",

            //basic

            "あ": "a",
            "か": "ka",
            "さ": "sa",
            "た": "ta",
            "な": "na",
            "は": "ha",
            "ま": "ma",
            "ら": "ra",

            "い": "i",
            "き": "ki",
            "し": "shi",
            "ち": "chi",
            "に": "ni",
            "ひ": "hi",
            "み": "mi",
            "り": "ri",

            "う": "u",
            "く": "ku",
            "す": "su",
            "つ": "tsu",
            "ぬ": "nu",
            "ふ": "fu",
            "む": "mu",
            "る": "ru",

            "え": "e",
            "け": "ke",
            "せ": "se",
            "て": "te",
            "ね": "ne",
            "へ": "he",
            "め": "me",
            "れ": "re",

            "お": "o",
            "こ": "ko",
            "そ": "so",
            "と": "to",
            "の": "no",
            "ほ": "ho",
            "も": "mo",
            "ろ": "ro",

            "わ": "wa",
            "を": "wo",
            "ん": "n",


            "が": "ga",
            "ざ": "za",
            "だ": "da",
            "ば": "ba",
            "ぱ": "pa",

            "ぎ": "gi",
            "じ": "ji",
            "ぢ": "ji",
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


            // obsoleted kana

            "ゑ":"we"


        }

        dics.katakana = {
            "キャ": "kya",
            "シャ": "sha",
            "チャ": "cha",
            "ニャ": "nya",
            "ヒャ": "hya",
            "ミャ": "mya",
            "リャ": "rya",
            "ギャ": "gya",
            "ジャ": "ja",
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
            "ジュ": "ju",
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
            "ジョ": "jo",
            "ビョ": "byo",
            "ピョ": "pyo",

            "ファ": "fa",
            "フィ": "fi",
            "フェ": "fe",
            "フォ": "fo",
            "フュ": "fyu",

            "ウィ": "wi",
            "ウェ": "we",
            "ウォ": "wo",

            "ヴァ": "va",
            "ヴィ": "vi",
            "ヴェ": "ve",
            "ヴォ": "vo",

            "ツァ": "tsa",
            "ツィ": "tsi",
            "ツェ": "tse",
            "ツォ": "tso",

            "チェ": "che",
            "シェ": "she",
            "ジェ": "je",
            "ティ": "ti",
            "ディ": "di",
            "デュ": "du",
            "トゥ": "tu",


            //basic

            "ア": "a",
            "カ": "ka",
            "サ": "sa",
            "タ": "ta",
            "ナ": "na",
            "ハ": "ha",
            "マ": "ma",
            "ラ": "ra",

            "イ": "i",
            "キ": "ki",
            "シ": "shi",
            "チ": "chi",
            "ニ": "ni",
            "ヒ": "hi",
            "ミ": "mi",
            "リ": "ri",

            "ウ": "u",
            "ク": "ku",
            "ス": "su",
            "ツ": "tsu",
            "ヌ": "nu",
            "フ": "fu",
            "ム": "mu",
            "ル": "ru",

            "エ": "e",
            "ケ": "ke",
            "セ": "se",
            "テ": "te",
            "ネ": "ne",
            "ヘ": "he",
            "メ": "me",
            "レ": "re",

            "オ": "o",
            "コ": "ko",
            "ソ": "so",
            "ト": "to",
            "ノ": "no",
            "ホ": "ho",
            "モ": "mo",
            "ロ": "ro",

            "ワ": "wa",
            "ヲ": "wo",
            "ン": "n",


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


            // obsoleted kana

            "ヱ":"we",
            "ヹ":"ve"


        }

        var longvowels = {
            'a': 'ā',
            'e': 'ē',
            'i': 'ī',
            'o': 'ō',
            'u': 'ū'
        }


        var replaceAll = function (find, replace, str) {

            return str.replace(new RegExp(find, 'g'), replace);
        }

        var longVowelsReplacer = function (match, p1, p2, offset, string) {
            //could be easier if just hardcoded into dictionary....
            var new_spelling;
            //ex. replace cha with chā
            if (dics.katakana[p1]) {
                new_spelling = dics.katakana[p1];
            }
            //ex. replace ra with rā
            else if (p1.length > 1 && dics.katakana[p1.charAt(1)]) {
                new_spelling = p1.charAt(0) + dics.katakana[p1.charAt(1)];
            }
            if (new_spelling) {
                for (var key in longvowels) {
                    new_spelling = new_spelling.replace(key, longvowels[key]);
                }
                return new_spelling;
            }
            else {
                return p1 + p2;
            }
        }

        //replace long vowels first
        result = result.replace(/(.|..)(ー)/g, longVowelsReplacer);


        for (var index in dics) {
            for (var s in dics[index]) {
                result = replaceAll(s, dics[index][s], result);

            }
        }

        //replace the sokuon (doubling)
        result = result.replace(/(ッ|っ)([a-z])/g, "$2$2");


        return result;

    }


}).call(this);


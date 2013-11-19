"use strict";


(function(){

    var gojuon = {};

    gojuon.convert = function (syllabary) {

        var replaceAll = function (find, replace, str) {

            return str.replace(new RegExp(find, 'g'), replace);
        }

        var dics = {};

        dics.hiragana_basic = {
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
            "よ": "yo"


        }

        dics.hiragana_advance = {
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
            "とぅ": "tu"

        }


        dics.katakana_basic = {
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

            "ャ": "ya",
            "ュ": "yu",
            "ョ": "yo"


        }

        dics.katakana_advance = {
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
            "トゥ": "tu"

        }


        var result = syllabary;

        for (var index in dics){
            for (var s in dics[index]) {
                result = replaceAll(s, dics[index][s], result);
            }
        }



        return result;

    }


    if (exports){
        exports.convert = gojuon.convert;
    }



}).call(this);


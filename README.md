romaj.js
=============
JavaScript utility that makes conversion between Japanese romaji and kana.  Currently supports Hepburn system only.


### Install

Using `npm`

    npm install romaji

Using `bower`

    bower install romaji	



### Test

    npm install -g mocha
    npm test


### Build
	npm install -g uglify-js
	npm run-script build


### Usage

    romaji.fromKana('ローマ');   //return 'rōma'

    romaji.toHiragana('tsuzuku');    // return 'つづく'

    romaji.toKatakana('chāhan');  //return 'チャーハン'

romaji.js ![](https://travis-ci.org/xna2/romaji.js.svg?branch=master)
=============
JavaScript utility that makes conversion between Japanese romaji and kana.  Currently supports Hepburn system only.

[![NPM](https://nodei.co/npm/romaji.png?downloads=true)](https://nodei.co/npm/romaji/)

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

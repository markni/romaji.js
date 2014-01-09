var assert = require("assert");
var romaji = require("../romaji.js");


describe('romaji.js', function () {

    describe('#noConflict()', function () {
        it('should return romaji object', function () {
            var noconflictromaji = romaji.noConflict();
            assert.equal(romaji, noconflictromaji);
        })
    })


    describe('#fromKana()', function () {
        it('should return the correct rōmaji from hiragana', function () {
            assert.equal(romaji.fromKana('ふじさん'), 'fujisan');
            assert.equal(romaji.fromKana('おちゃ'), 'ocha');
            assert.equal(romaji.fromKana('ちじ'), 'chiji');
            assert.equal(romaji.fromKana('ちぢむ'), 'chijimu');
            assert.equal(romaji.fromKana('つづく'), 'tsuzuku');

        })
        it('should return the correct rōmaji from katakana', function () {
            assert.equal(romaji.fromKana('フネカヂモガモ'), 'funekajimogamo');


        })
        it('should return the correct long vowels conversion from katakana', function () {
            assert.equal(romaji.fromKana('チャーハン'), 'chāhan');
            assert.equal(romaji.fromKana('ローマ'), 'rōma');
            assert.equal(romaji.fromKana('いムー'), 'imū');

        })
        it('should return the correct doubling for sokuon', function () {
            assert.equal(romaji.fromKana('モット'), 'motto');
        })
    })



    describe('#toHiragana()', function () {
        it('should return the correct hiragana from rōmaji', function () {
            assert.equal(romaji.toHiragana('fujisan'), 'ふじさん');
            assert.equal(romaji.toHiragana('ocha'),'おちゃ');
            assert.equal(romaji.toHiragana('chiji'),'ちじ');
            assert.equal(romaji.toHiragana('tsuzuku'),'つづく');
        })

        it('should return the correct doubling for sokuon', function () {
            assert.equal(romaji.toHiragana('suppai'), 'すっぱい');
        })
    })


	describe('#toKakana()',function(){
		it('should return the correct katakana from rōmaji',function(){
			assert.equal(romaji.toKatakana('funekajimogamo'), 'フネカヂモガモ');


		})

		it('should return the correct katakana for rōmaji contains long vowels',function(){
			assert.equal(romaji.toKatakana('chāhan'), 'チャーハン');
			assert.equal(romaji.toKatakana('rōma'), 'ローマ');


		})
	})


})


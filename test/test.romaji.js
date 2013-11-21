var assert = require("assert");
var romaji = require("../romaji.js");


describe('romaji.js', function(){

    describe('#noConflict()', function(){
        it('should return romaji object',function(){
            var noconflictromaji = romaji.noConflict();
            assert.equal(romaji, noconflictromaji);
        })
    })

    describe('#convert()', function(){
        it('should return the correct rōmaji from hiragana', function(){
            assert.equal(romaji.convert('ふじさん'),'fujisan');
            assert.equal(romaji.convert('おちゃ'),'ocha');
            assert.equal(romaji.convert('ちじ'),'chiji');
            assert.equal(romaji.convert('ちぢむ'),'chijimu');
            assert.equal(romaji.convert('つづく'),'tsuzuku');

        })
        it('should return the correct rōmaji from katakana', function(){
            assert.equal(romaji.convert('フネカヂモガモ'),'funekajimogamo');


        })
        it('should return the correct long vowels conversion from katakana', function(){
            assert.equal(romaji.convert('チャーハン'),'chāhan');
            assert.equal(romaji.convert('ローマ'),'rōma');
            assert.equal(romaji.convert('いムー'),'imū');

        })
    })

})


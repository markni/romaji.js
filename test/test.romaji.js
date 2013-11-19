var assert = require("assert");
var romaji = require("../romaji.js");


describe('romaji.js', function(){
    describe('#convert()', function(){
        it('should return the correct rōmaji', function(){
            assert.equal(romaji.convert('ローマじ'),'rōmaji');
        })
    })
})


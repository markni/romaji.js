var assert = require("assert");
var gojuon = require("../romaji.js");


describe('romaji.js', function(){
    describe('#convert()', function(){
        it('should return the correct rōmaji', function(){
            assert.equal(gojuon.convert('ローマじ'),'rōmaji');
        })
    })
})


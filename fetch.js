var request = require('request');
var fs = require('fs');
var cheerio = require('cheerio');

proxy = 'http://proxy.intra.bt.com:8080';
searchQuery = 'micro sd'
urlScrap = 'https://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=' + searchQuery
//https://www.amazon.in/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=sd+card
var options = {
    url: urlScrap,
    proxy: proxy, //'http://' + proxyList[getRandomInt(0,25)], //proxy,
    headers: {
        'User-Agent': "Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/527  (KHTML, like Gecko, Safari/419.3) Arora/0.6 (Change: )"
    }
}

var file = fs.createWriteStream("test.json");

request(options, function (body, res, error) {
    console.log(res)
    $ = cheerio.load(res)
    tab = $('#body')
    console.log(tab)

}).pipe(file, function (file) {
    data = JSON.parse(file);
    console.log(data.chart)
})
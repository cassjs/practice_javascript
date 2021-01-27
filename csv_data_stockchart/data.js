const { data } = require('autoprefixer');

// console.log(require('fs').readFileSync('./aapldata.csv','ascii').toString()); //1. console.log the data to check if working
module.exports.readStockData=function() {

var data=[];

require('fs').readFileSync('./aapldata.csv','ascii').split(/\r?\n/).forEach(function(line) {
    var cols=line.split(',');
    var date=cols[0];
    var price=cols[1];

    data.push({date:date,price:price});
});

return data;

}


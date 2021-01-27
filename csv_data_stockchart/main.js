var data=require('./data');
var stockdata=data.readStockData();

console.table(stockdata);

window.stockdata=stockdata;
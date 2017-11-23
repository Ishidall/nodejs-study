//同期

// console.log("start");

// function sleep(mSec) {
// 	var startTime = new Date().getTime();
// 	while (new Date().getTime() < startTime + mSec);

// 	console.log("sleepが完了しました。");
// }

// sleep(5000);

// console.log("end");


//非同期
var fs = require('fs');

fs.readFile("number.txt", "utf-8", function(err, data){
	console.log("starting readFile method");
	if (err) throw err;
	console.log("ファイルの読み取り準備ができました。");
	console.log(data);
});

console.log("start");

console.log("end");
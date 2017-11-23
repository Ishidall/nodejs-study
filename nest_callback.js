//sleep: callback関数を引数にとり(callbackはnull(err)と現在時刻(res)を引数に取る)、これを一秒後に実行する。
function sleep(callback) {
	setTimeout(function() {
		callback(null, '現在時刻: ' + new Date().getTime());
	}, 1000);
}

// sleep(function(err, res) {
// 	//1秒後に下記の処理が走る
// 	console.log("1度目の処理");
// 	console.log(res);
// 	sleep(function(err, res) {
// 		//1秒後に下記の処理が走る
// 		console.log("2度目の処理");
// 		console.log(res);
// 		sleep(function(err, res) {
// 			//1秒後に下記の処理が走る
// 			console.log("3度目の処理");
// 			console.log(res);
// 		});
// 	});
// });

sleep(function(err, res) {
	//1秒後に下記の処理が走る
	console.log("1度目の処理");
	console.log(res);
});

sleep(function(err, res) {
	//1秒後に下記の処理が走る
	console.log("2度目の処理");
	console.log(res);
});

sleep(function(err, res) {
	//1秒後に下記の処理が走る
	console.log("3度目の処理");
	console.log(res);
});

sleep(function(err, res) {
	//1秒後に下記の処理が走る
	console.log("4度目の処理");
	console.log(res);
});
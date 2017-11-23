
// var promise = new Promise(function(resolve, reject) {
//     // 非同期の処理
//     // 処理が終わったら、resolve または rejectを呼ぶ
// });

function asyncFunction () {
	//Promiseオブジェクトをインスタンス化。処理が終わったらresolveかrejectを呼ぶ
	return new Promise(function (resolve, reject) {
		//16ミリ秒後にresolveされる
		setTimeout(function () {
			resolve('Async Hello World');
		}, 16);
	});
}

// promise.then(onFulfilled, onRejected);

//.thenはPromiseインスタンスのメソッド。値が帰ってきたときのコールバックを設定
asyncFunction().then(function (value) {
	console.log(value);
}).catch(function (error) {
	console.error(error);
});

//下記のように書いてもOK
// asyncFunction().then(function (value) {
// 	console.log(value);
// }, function (error) {
// 	console.error(error);
// });

function getURL(URL) {
	return new Promise (function (resolve, reject) {
		//XMLHttpRequestをインスタンス化
		var req = new XMLHttpRequest();
		//リクエスト方法を指定(今回は指定したURLにGETで非同期)
		req.open('GET', URL, true);
		//受信が成功したら、リクエストステータスが200ならリクエスト結果、それ以外ならステータスを返す
		req.onLoad = function() {
			if (req.status === 200) {
				resolve(req.responseText);
			} else {
				reject(new Error(req.statusText));
			}
		};
		req.onerror = function() {
			reject(new Error(req.statusText));
		};
		//リクエストを飛ばす
		req.send;
	});
}

var URL = "http://httpbin.org/get";
//リクエストが200ならリクエスト結果が表示される。それ以外ならステータスが表示される
getURL(URL).then(function onFulfilled(value) {
	console.log(value);
}).catch(function onRejected(error) {
	console.error(error);
})


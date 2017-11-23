function getUrl(url) {
	//①PromiseコンストラクタをnewしてPromiseオブジェクトを返す
	return new Promise(function(resolve, reject) {
		const https = require('https');

			https.get(url, function(res) {
				if (res.statusCode === 200) {
					res.on('data', function(chunk) {
					//②うまくいった場合の処理を記載する
					resolve(chunk);
					}		);
				} else {
				//②うまくいかなかった場合の処理を記載する
				reject(new Error(res.statusCode));
				}		
		}).on('error', function(e) {
			reject(new Error(e.message));
		});
	})
}
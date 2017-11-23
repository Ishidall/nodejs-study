//Promise: 非同期的に動作する関数は、本来返したい戻り値のかわりに「プロミスオブジェクト」という特別なオブジェクトを返しておき、本来返したい値を渡せる状態になったら、そのプロミスオブジェクトを通して呼び出し元に値を渡す。

console.log('start');

//非同期な関数setTimeoutをPromiseに格納
function puts(str) {
	//①Promiseコンストラクタをnewして、promiseオブジェクトを返す。この際、引数には何らかのfunctionが入る。
	//Promiseコンストラクタの引数となる関数の引数にはresolveが必須。また、任意でrejectも引数に取れる。
	//resolveとrejectはいずれもfunctionであり、それぞれが実行されるとPromiseオブジェクトの状態がfulfilled、rejectedになる。
	return new Promise(function(resolve) {
		setTimeout(function() {
			resolve(str);
		}, 1000);
	});
}

//② ①のpromiseオブジェクトに対して.thenで値が帰ってきたときのコールバックを設定する
puts('async').then(function(result) {
	console.log(result)
});

console.log('end');
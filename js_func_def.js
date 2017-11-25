// javascriptでの関数定義方法

// ①関数コンストラクタ
// 末尾の引数が関数本体となる
// パフォーマンスが悪いらしい。使うべきではない

let myFunc = new Function('x', 'y',
  'return x + y');

console.log('関数コンストラクタ', myFunc('Hello! ', 'World!'));

// ②関数式(関数リテラル)
// 関数定義と同時に変数に代入する
// 関数名をつけると、定義した関数内で再帰的な使い方ができる
// ただし、その関数名は関数のスコープ外では利用できない
// また、関数が代入された変数には別の関数などを再代入することもできる

// 無名関数
let mySecondFunc = function(x, y) {
  return x + y;
}

console.log('無名関数');
console.log('関数式(関数リテラル)', mySecondFunc('Hello! ', 'World Again!'));

// 名前付き関数
let myThirdFunc = function recursiveExec(x) {
  console.log(x);
  x++;

  if (x > 10) {
    return;
  }

  // 再帰
  recursiveExec(x)
}

console.log('名前付き関数: 再帰呼び出し');
myThirdFunc(0);

// ③関数宣言
// 関数式とほぼ同じ
// 大きな特徴として巻き上げ(ホイスト)がある

// ファイル上、関数の定義前でも実行可能(巻き上げ)
console.log('関数宣言', 'beforeHand', myFourthFunc(5, 5));

function myFourthFunc(x, y) {
  return x + y;
}

// もちろん関数の定義後でも実行可能
console.log('関数宣言', 'afterHand', myFourthFunc(10, 10));

// 呼び出すたびにインクリメントした値を返す関数

// 例①: 外部で定義したオブジェクトの値を関数内で代入し直す

// この場合、関数外部で定義しているから成り立つ
// また、xをオブジェクトではなくintにするとインクリメントしなくなる
// xの中身がintの場合、関数に渡した際には中身のintだけ渡して関数側で新たに名前をつけ、その新しい変数に対して処理を行う
// xがオブジェクトの場合、関数には該当オブジェクトの参照が渡され、新たに名前はつけるものの、実際に編集するのはその参照先となる

let x = {
  num: 1
};

function increment(x) {
  console.log(x.num);

  x.num++;
}

increment(x);
increment(x);
increment(x);
increment(x);
increment(x);

// ********************************************************************************

// 例②: クロージャを用いる

// incrementSecondは内部で変数xを定義し、xを操作する無名関数を返す
// 外部で定義した変数func3にincrementSecondの実行結果、つまり「xを操作する無名関数」を代入する
// func3は動作のたびにxを標準出力に出力し、xをインクリメントする
// 裏側の動きとしては、incrementSecond内で定義した変数の参照が可能な無名関数への参照をfunc3に代入しているような感じ？

function incrementSecond() {
  let x = 1;

  return function() {
      console.log(x);
      x++;
  };
}

let func3 = incrementSecond();

func3();
func3();
func3();
func3();
func3();

// ********************************************************************************

// 補足

// 即時実行関数の実装 → (function...)();

let speak = function() {
  console.log('hello.');
}

speak();

(function() { console.log('hello2.') })();
(() => { console.log('hello3.') })();

// ********************************************************************************

// 補足

// 関数宣言で定義した関数名について
// ()をつけて呼び出すと定義した関数が実行され、()をつけずに呼び出すと定義した関数そのもの(functionオブジェクト？)が吐き出される
// なお、return文が無い関数の返却値はundefinedになる

function outer() {
  function inner() {
    console.log('hello4.')
  }

  return inner;
}

let func = outer();

func();

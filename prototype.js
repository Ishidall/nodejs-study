// 関数は生成された時点でprototypeプロパティを持ち、その参照先は関数名と同じ名前のついた空オブジェクトとなる
// つまり、function.prototypeで親オブジェクトが参照できる

let myObj = {};

function proto() {
  console.log('proto');
}

function protoSecond() {
  console.log('protoSecond');
}

console.log(proto.prototype);
console.log(protoSecond.prototype);

proto();

// ****************************************
// コンストラクタのprototypeプロパティに関数を持たせると、親オブジェクトがその関数をメソッドとして持つことになる
// 上記コンストラクタからnewされたインスタンスは親と同じメソッドを持つ

function Dog() {}

Dog.prototype.bark = function() {
  console.log('わんわん');
}

let dog = new Dog();

dog.bark();

// ****************************************
// 共通の処理をコンストラクタのprototypeプロパティに持たせる際、その定義内でthisを呼ぶと、コンストラクタの定義内で呼んだthisと同じようにインスタンス自身を指すことになる

function Cat(cry) {
  this.cry = cry;
  console.log('Cat定義内', this);
}

Cat.prototype.goes = function() {
  console.log(this.cry);
  console.log('prototypeのgoes定義内', this);
}

let cat1 = new Cat('にゃん');
let cat2 = new Cat('にゃーん');
let cat3 = new Cat('みゃおう');

cat1.goes();
cat2.goes();
cat3.goes();

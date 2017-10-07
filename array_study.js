//0〜9までの値を要素として持つ配列を宣言
let numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

//numArrayが1または10を要素に持っているかを判定
//①includes()で処理
console.log(numArray.includes(1)); //trueが表示されます
console.log(numArray.includes(10)); //falseが表示されます

//②some()で処理
let isNumOne = numArray.some(num => {
	return(num === 1);
});

console.log(isNumOne); //trueが表示されます

let isNumTen = numArray.some(num => {
	return(num === 10);
});

console.log(isNumTen); //falseが表示されます

//③forEach()で処理
let oneIsIncluded = 0;
let tenIsIncluded = 0;

numArray.forEach(num => {
	if (num === 1) {
		oneIsIncluded = 1;
		console.log(true);
	} else if (num === numArray[numArray.length - 1] && oneIsIncluded === 0) {
		console.log(false);
	}
});  //trueが表示されます

numArray.forEach(num => {
	if (num === 10) {
		tenIsIncluded = 1;
		console.log(true);
	} else if (num === numArray[numArray.length - 1] && tenIsIncluded === 0) {
		console.log(false);
	}
}); //falseが表示されます
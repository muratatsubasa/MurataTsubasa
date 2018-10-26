/**
 * パート1
 * 出力
 * 
 * ・出力にはconsole.log()を使用します。
 * ・すでに記述されている要素は変更禁止です。
 */


/**
 * 問題1
 * 「Hello World!」と出力しましょう。
 */

console.log('Hello World!');

/**
 * 問題2
 * 下記の計算結果を出力しましょう。
 * 注：直接答えの数値を記入せず、コンピューターに計算させること。
 */

// 2-1 「24 + 1」

const addiction = 24 + 1;
console.log(addiction);

// 2-2 「33 - 12」

const subtraction = 33 - 12;
console.log(subtraction);

// 2-3 「42 × 55」

const multiplication = 42 * 55;
console.log(multiplication);

// 2-4 「84 ÷ (4 + 8)」 

const division = 84 / (4 + 8);
console.log(division);

// 2-5 「4.4 × 2.3 - 1.6」

const decimalPoint = 4.4 * 2.3 - 1.6;
console.log(decimalPoint);


/**
 * 問題3
 * すでに記述されている定数を利用して、「おはようございます。今日はいい天気ですね。」と出力しましょう。
 */

const ohayo = 'おはようございます。';
const today = '今日は';
const weather = 'いい天気ですね。';

console.log(ohayo + today + weather);

/**
 * 問題4
 * すでに記述されている定数を利用して、「商品2点で500円です。消費税込みで540円です。」と出力しましょう。
 */

const product = '商品2点で';
const tax = '消費税込みで';
const conclude = '円です。';

const price1 = 300;
const price2 = 200;
const taxRate = 1.08;

const priceAdd = price1 + price2;
const taxIn = priceAdd * taxRate;
console.log(product + priceAdd + conclude + tax + taxIn + conclude);

/**
 * 問題5
 * 下記のコードは「x+yは42」と出力しようとしていますが、意図した通りの動きになりません。
 * 意図した動きになるようにコードを直接修正してください。
 */

const x = 24,
    y = 18;
console.log('x+yは' + (x + y));



/**
 * 問題6
 * 下記のコードが正常に動作するように定数を定義しましょう。
 */

const height = 10;
const width = 20;

console.log('四角形の高さ：' + height + ' 四角形の横幅：' + width);
console.log('四角形の面積：' + (width * height));

/**
 * 問題7
 * 下記のコードが正常に動作するように変数を定義しましょう。
 */
let number = 24;
console.log(number); //24と表示される。
number += 12;
console.log(number); //36と表示される。
number /= 12;
console.log(number); //3と表示される。

/**
 * 問題8
 * すでに記述されている定数とテンプレート文字列を使用して次の文章を出力しましょう。
 * 「私の名前はジョン・ドゥです。年齢は22歳です。」
 */

const name = 'ジョン・ドゥ';
const age = 22;
console.log(`私の名前は${name}です。年齢は${age}歳です。`);
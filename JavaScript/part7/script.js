/**
 * パート7
 * イベント
 * 
 * ・すでに記述されている要素は変更禁止です。
 * ・HTML・CSSは変更禁止です。
 * ・スコープを作るために即時関数を使用します。解答はfunction内に記述してください。
 */


/**
 * 問題1
 * "#switchInput" 要素の状態に合わせて、"#switchCondition"が下記の状態になる様にしましょう。
 * ・チェックされている：テキストを「ON」に変更し、クラス ".on" を追加する。
 * ・チェックされてない：テキストを「OFF」に変更し、クラス ".on" を削除する。
 */
(function q1() {
  const switchInput = document.getElementById('switchInput');
  switchInput.checked = false;
  const switchCondition = document.getElementById('switchCondition');
  switchInput.addEventListener('click', function () {
    if (switchInput.checked) {
      switchCondition.innerText = 'ON';
      switchCondition.classList.add('on');
    } else {
      switchCondition.innerText = 'OFF';
      switchCondition.classList.remove('on');
    }
  })
}());

/**
 * 問題2
 * キーボードの「1」「2」「3」キーが押下された際に、対応する数字が表示された".num-box"要素が下記の動きをするようにしましょう。
 * 
 * ・".bg-num"が適用されていない場合：".bg-num"を適用する
 * ・".bg-num"が適用されている場合：".bg-num"を取り除く
 */

(function q2() {
  const col = document.getElementsByClassName('col');
  window.document.onkeydown = function (e) {
    console.log(e);
    if (e.key === '1') {
      col[0].classList.toggle('bg-num');
    } else if (e.key === '2') {
      col[1].classList.toggle('bg-num');
    } else if (e.key === '3') {
      col[2].classList.toggle('bg-num');
    }
  }
}());


/**
 * 問題3
 * "#btnGood" が押下される度に、".count"が１ずつ増える様にしましょう。
 */
(function q3() {
  const btnGood = document.getElementById('btnGood');
  let count = document.getElementsByClassName('count');
  let cnt = 0;
  btnGood.addEventListener('click', function () {
    count[0].innerText = ++cnt;
  })
}());
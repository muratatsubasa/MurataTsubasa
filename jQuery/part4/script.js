/**
 * パート4
 * jQuery応用3 スライドショー
 * 
 * ・すでに記述されている要素は変更禁止です。
 * ・HTML・CSSは変更禁止です。
 */

$(() => {

    /**
     * Q
     * ".slider__btn" 要素が押下された際、下記の動作をするようにしましょう。
     * 1. data()メソッドを利用し、押下されたボタンのdata-ctrl属性を取得する。
     * 2. 取得したdata-ctrl属性が'next'の場合".slider__list"内の次の画像を表示し、異なる場合前の画像を表示する。
     * （1.jpg が表示された状態でnextボタンを押下した場合 2.jpg が、 2.jpg が表示された状態でprevボタンを押下した場合 1.jpg が表示される。）
     * 3. 別画像を表示する際は、500ミリ秒をかけてアニメーションしながらスライドさせる。
     * 4. ただし、最初（最後）の画像が表示された状態でprev（next）ボタンを押下した場合は、最後（最初）の画像が表示されること。
     * 
     * 動作については、./sample/slider.gif を参考にしてください。
     * 
     * Hint
     * • 画像位置の調整には、".slider__list"要素のCSSのleftを書き換えましょう。
     */

    const slider = $('.slider__list');
    let page = 0;
    const lastPage = slider.children().length - 1;
    const width = slider.children().outerWidth();
    const button = $('button');

    function changePage() {
        slider.stop().animate({
            left: page * -width
        });
    };
    button.click(function (e) {
        const data = $(e.currentTarget).data('ctrl');
        if (data === 'prev') {
            if (page === 0) {
                page = lastPage;
            } else {
                page--;
            };
        } else if (data === 'next') {
            if (page === lastPage) {
                page = 0;
            } else {
                page++;
            };
        };
        changePage();
    });
});
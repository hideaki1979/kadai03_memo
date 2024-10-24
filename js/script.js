'use strict';

// 初期処理
window.addEventListener('load', function(){
    listDisplay();
});

// 初期登録
$("#init-regist").on("click", function(){
    localStorage.setItem("111", "aaaaa");
    localStorage.setItem("222", "bbbbb");
    localStorage.setItem("333", "ccccc");
    localStorage.setItem("444", "ddddd");
    localStorage.setItem("555", "eeeee");
    localStorage.setItem("666", "fffff");
    localStorage.setItem("777", "ggggg");
    localStorage.setItem("888", "hhhhh");
    localStorage.setItem("999", "iiiii");
    localStorage.setItem("101", "jjjjj");
    localStorage.setItem("102", "kkkkk");
    localStorage.setItem("103", "lllll");
    listDisplay();
});

// 全件削除ボタン押下時
$("#all-delete").on("click", function(){
    localStorage.clear();
    $("#memolist").empty();
    $("#title").val("");
    $("#memo").val("");
});

// thクリック時
// 動的に追加されたタグは親要素へイベント委譲（イベントデリゲーションというのが必要らしい・・・）
$("#memolist").on("click", "th", function(){
    const key = $(this).text();
    // console.log(key);
    // location.href = `edit.html?key=${key}`;
    location.href = `edit.html?key=` + decodeURIComponent(key);
});

// tableリスト出力する
function listDisplay() {
    for(let i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        const html = `<tr><th>${key}</th><td>${value}</td></tr>`;
        $("#memolist").append(html);
    }
};
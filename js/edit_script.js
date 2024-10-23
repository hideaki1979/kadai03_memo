window.addEventListener('load', function(){
    const url = this.location.search;
    // console.log(url);
    const param = url.split('=');
    const key = param[1];
    if(key !== ""){
        const value = this.localStorage.getItem(key);
        // console.log(key);
        $("#title").val(key);
        $("#memo").val(value);
    }
});

// 登録ボタン押下時
$("#regist").on("click", function(){
    const key = $("#title").val();
    const value = $("#memo").val();
    // 重複キーチェック
    for (let i = 0; i < localStorage.length; i++){
        if (key === localStorage.key(i)){
            alert(`キーが既に存在しています。キー：${key}`);
            return;
        }
    }
    localStorage.setItem(key, value);
    alert(`メモ情報を登録しました。キー：${key}`);
    mainScreen()
});

// 編集ボタン押下時
$("#edit").on("click", function(){
    // メモを更新
    const key = $("#title").val();
    const value = $("#memo").val();
    localStorage.setItem(key, value);
    alert(`メモ情報を更新しました。キー：${key}`);
    mainScreen();
});

// 削除ボタン押下時
$("#delete").on("click", function(){
    const key = $("#title").val();
    localStorage.removeItem(key);
    alert(`メモ情報を削除しました。キー：${key}`)
    mainScreen();
});

// メイン画面へ遷移
function mainScreen() {
    location.href = "index.html";
}
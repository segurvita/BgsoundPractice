$(function () {
    //btn_playをクリックした時
    $("#btn_play").click(function () {
        $("#audio_ie").attr("src", "voice.wav");                  //bgsoundタグのsrcを切り替えると音声が再生する。
        //document.getElementById("audio_ie").src = "voice.wav";  //上の行と同じ処理。jQueryに依存しない書き方
        //document.all.audio_ie.src = "voice.wav";                //上の行と同じ処理。古いIEの書き方。SS社もこの書き方。
    });

    //btn_pauseをクリックした時
    $("#btn_pause").click(function () {
        $("#audio_ie").attr("src", "");  //bgsoundタグのsrcを空文字に変更すると、音声が停止する。
    });
});
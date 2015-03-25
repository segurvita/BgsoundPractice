$(function () {
    //btn_playをクリックした時
    $("#btn_play").click(function () {
        $("#audio_ie").attr("src", "voice_1.wav");                  //bgsoundタグのsrcを切り替えると音声が再生する。
        //document.getElementById("audio_ie").src = "voice_1.wav";  //上の行と同じ処理。jQueryを利用しない表現
        //document.all.audio_ie.src = "voice_1.wav";                //上の行と同じ処理。ただし、document.allの利用は現在非推奨
    });

    //btn_pauseをクリックした時
    $("#btn_pause").click(function () {
        $("#audio_ie").attr("src", "");  //bgsoundタグのsrcを空文字に変更すると、音声が停止する。
    });
});
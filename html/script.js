$(function () {
    $("#btn_play1").click(function () {
        $("#bgsound_wav").attr("src", "voice_1.wav");
    });
    $("#btn_play2").click(function () {
        document.all.bgsound_wav.src = "voice_1.wav";
    });
    $("#bt_pause").click(function () {
        $("#bgsound_wav").attr("src", "");
    });
});
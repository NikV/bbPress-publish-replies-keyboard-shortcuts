/**
 * Javascript file for bbPress Shift+Enter to reply
 */
window.addEventListener = function () {
    document.getElementById("bbpress-forums").onkeydown = function (submit) {

        if (submit.keyCode == 13 && submit.shiftKey) {
            document.getElementById("bbp_reply_submit").click();
        }

        else if (submit.keyCode == 13 && submit.metaKey ) {
            document.getElementById("bbp_reply_submit").click();
        }
    }
}
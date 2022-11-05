function pastedSnackbar() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function copyTextToClipboard(event) {
    var target = event.target;
    var copyText = "donttry#8485";

    navigator.clipboard.writeText(copyText);
}
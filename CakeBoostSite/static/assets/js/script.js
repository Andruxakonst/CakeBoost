function copyText(link) {
    var copyText = link;
    copyText.select();
    document.execCommand("copy");
}
window.onscroll = function(){
    var html = document.documentElement, body = document.body;
    var header = document.getElementById('topnav').style;
    if(html.scrollTop>49||body.scrollTop>49) {
        header.backgroundColor="#fff";
        header.boxShadow="0px 4px 12px rgba(68, 75, 77, 0.1)";
    } else {
        header.backgroundColor="#f5f5f6";
        header.boxShadow="";
    }
}
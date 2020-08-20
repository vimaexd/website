function showPage(){
    $(".stuff-cont").show()
    $("#navbar-links").show()
    $(".spinner-cont").hide()
}
window.onload = () => {
    setTimeout(showPage, 200);
    twemoji.parse(document.body);
    fetch("https://api.stringy.software/randomquote")
        .then(res => res.text())
        .then(q => $("#quote").text(q))

    fetch("https://api.stringy.software/database/profile", { method: 'get', headers: { "X-DiscordToken": Cookies.get("at") } })
    .then(res => res.json())
    .then(json => {
        $("#login").remove()
        if(json[0].administrator === 1){
            $(".projtop").append('<button type="button" class="btn btn-primary" onclick="javascript:editProj()">Edit</button>')
        }
        $("#navbar-links").append(`
        <li role="presentation" class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            Account <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
            <p>Logged in as ${json[0].username}</p>
            <button type="button" onclick="window.location.href='/auth/logout/'" class="btn btn-danger">Logout</button>
        </ul>
        </li>`)
    })
}
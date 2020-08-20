function getProj() {
    fetch("https://api.stringy.software/database/projects")
        .then(res => res.json())
        .then(pr => {
            pr.forEach(i => {
                $("#proj").append(`<div class="col-sm-4">
                <div class="thumbnail">
                  <div class="caption text-center">
                    <img class="cardimg" src="${i.image}" />
                    <h4 id="thumbnail-label"><a href="${i.link}" target="_blank">${i.name}</a></h4>
                    <div class="thumbnail-description smaller">${i.description}</div>
                  </div>
                  <div class="caption card-footer text-center">
                  </div>
                </div>
              </div>
            </div>`)
            })
        })
}

function editProj() {
  var array = document.getElementsByClassName("thumbnail")
  for(let i = 0; i < array.length; i++){
      array[i].insertAdjacentHTML("beforeend", `<button type="button" class="btn btn-danger" onclick="javascript:removeProject('${array[i].children[0].children[1].children[0].innerHTML}')">Delete</a>`)
  }
  // $("#projects").append('<div class="col s4"><div id="newcard" class="card transparent"><div id="newcont" class="card-content white-text"><span class="card-title">New Project</span><input id="f_name" type="text" class="white_text" placeholder="Name"><input id="f_description" class="white_text" type="text" placeholder="Description"><input id="f_link" class="white_text" type="text" placeholder="URL to project"><input id="f_image" class="white_text" type="text" placeholder="Image URL"></div><div id="newact" class="card-action"><a href="javascript:newProject()">Add</a></div></div></div>')
  $("#proj").append(`<div class="col-sm-4">
                <div class="thumbnail" id="newcard">
                  <div class="caption text-center">
                    <h4 id="thumbnail-label">Add Project</h4>
                    <div class="thumbnail-description smaller">
                      <input class="form-control f_pad" id="f_name" placeholder="Name">
                      <input class="form-control f_pad" id="f_description" placeholder="Description">
                      <input class="form-control f_pad" id="f_link" placeholder="URL">
                      <input class="form-control f_pad" id="f_image" placeholder="Image URL">
                      <button type="button" onclick="javascript:newProject()" class="btn btn-success">Success</button>
                    </div>
                  </div>
                  <div class="caption card-footer text-center">
                  </div>
                </div>
              </div>
            </div>`)
  $("#editbtn").remove()
}

function removeProject(proj) {
  fetch("https://api.stringy.software/database/deleteProject", {
      method: "post",
      headers: {
          "X-DiscordToken": Cookies.get("at"),
          "Content-Type": 'application/json'
      },
      "body": JSON.stringify({
          "projectname": proj
      })
  })
  .then(res => res.json())
  .then(json => {
      if(json.status = 200){
          Swal.fire({icon: 'success',title: 'Success!',text: 'The project was deleted successfully.'}).then(location.reload())
      } else if(json.status = 403){
          Swal.fire({icon: 'success',title: 'What?',text: 'You do not have permission to edit projects.'}).then(location.reload())
      } else {
          Swal.fire({icon: 'error',title: 'Oops...',text: 'There was an error adding this project'}).then(location.reload())
      }
  })
}

function newProject() {
  let name = $("#f_name").val()
  let desc = $("#f_description").val()
  let link = $("#f_link").val()
  let image = $("#f_image").val()

  if(!name) return Swal.fire({icon: 'error',title: 'Oops...',text: 'Please fill out the form completely.'})
  if(!desc) return Swal.fire({icon: 'error',title: 'Oops...',text: 'Please fill out the form completely.'})
  if(!link) return Swal.fire({icon: 'error',title: 'Oops...',text: 'Please fill out the form completely.'})
  if(!image) return Swal.fire({icon: 'error',title: 'Oops...',text: 'Please fill out the form completely.'})

  $("#newcont").remove()
  $("#newact").remove()
  $("#newcard").append(' <div class="preloader-wrapper small active"><div class="spinner-layer spinner-green-only"><div class="circle-clipper left"><div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right"><div class="circle"></div></div</div></div>')
  fetch("https://api.stringy.software/database/projects", {
      method: "post",
      headers: {
          "X-DiscordToken": Cookies.get("at"),
          "Content-Type": 'application/json'
      },
      "body": JSON.stringify({
          "name": name,
          "description": desc,
          "link": link,
          "image": image
      })
  })
  .then(res => res.json())
  .then(json => {
      if(json.status = 200){
          Swal.fire({icon: 'success',title: 'Success!',text: 'The project was added successfully.'}).then(location.reload())
      } else if(json.status = 403){
          Swal.fire({icon: 'success',title: 'What?',text: 'You do not have permission to edit projects.'}).then(location.reload())
      } else {
          Swal.fire({icon: 'error',title: 'Oops...',text: 'There was an error adding this project'}).then(location.reload())
      }
  })
}

$(".stuff-cont").hide()

function showPage(){
  $(".stuff-cont").show()
  $("#navbar-links").show()
  $(".spinner-cont").hide()
}

window.onload = () => {
    getProj()
    setTimeout(showPage, 500);
    
    twemoji.parse(document.body);

    fetch("https://api.stringy.software/database/profile", { method: 'get', headers: { "X-DiscordToken": Cookies.get("at") } })
    .then(res => res.json())
    .then(json => {
        $("#login").remove()

        // do stuff
        let badge = ""
        if(json[0].administrator){
          badge = `<i class="fas fa-tools"></i>`
        }
        $("#navbar-links").append(`
        <li role="presentation" class="dropdown">
        <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
            Account <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
            <p>Logged in as ${json[0].username} ${badge}</p>
            <button type="button" onclick="window.location.href='/auth/logout/'" class="btn btn-danger">Logout</button>
        </ul>
        </li>`)
        if(json[0].administrator === 1){
            $(".projtop").append('<button type="button" class="btn btn-primary" onclick="javascript:editProj()">Edit</button>')
        }
    })
}
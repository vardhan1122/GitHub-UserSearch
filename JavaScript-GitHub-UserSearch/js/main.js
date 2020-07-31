window.onload="myFunction()";
let searchBox =document.querySelector('#searchUser');
searchBox.addEventListener('keyup',function() {
    let username = searchBox.value;

// make the intilaization
  url='https://api.github.com/users/';
  //username="vardhan1122";
  repos="/repos";
  client_id='dab1f6ccd8a6605c72be';
  client_secret='a2233d6a36d25ab15e82346b488339677c16eb54';

// Make request to Github
fetch(`${url}${username}?client_id=${client_id}&client_secret=${client_secret}`)
   .then(function(data){ 
    return data.json();
    })
    .catch(function(error){
    console.error("Error",error);
    })	
    .then(function(user){
        let profileData=document.getElementById("profile");
        profileData.innerHTML=`<div class="card border-primary mb-3" style="max-width: 100rem;">
        <div class="card-header"><h2>${user.name}</h2></div>
        <div class="card-body">
        <div class="row">
        <div class="col-md-4">
        <img class="img-thumbnail avatar" src="${user.avatar_url}">
        <a target="_blank" class="btn btn-danger btn-block" href="${user.html_url}">View Profile</a>
        </div>
        <div class="col-md-8">
        <span class="badge badge-primary">Public Repos: ${user.public_repos}</span>
        <span class="badge badge-secondary">Public Gists: ${user.public_gists}</span>
        <span class="badge badge-success">Followers: ${user.followers}</span>
        <span class="badge badge-info">Following: ${user.following}</span>
        <br>
        <ul class="list-group">
            <li class="list-group-item">GithubUrl : <b>${user.url}</b></li>
            <li class="list-group-item">E_Mail : <b>${user.email}</b></li>
            <li class="list-group-item">Company : <b>${user.company}</b></li>
            <li class="list-group-item">Website/blog :<a href="${user.blog}" target="_blank">${user.blog}</a></li>
            <li class="list-group-item">Location: <b>${user.location}</b></li>
            <li class="list-group-item">Member Since: <b>${user.created_at}</b></li>
        </ul>
        </div>
        </div>
        </div>
        </div>
        <h3 class="page-header">Find Repos Here:</h3>
        <div id="repos"></div>`
        document.body.appendChild(profileData);

    fetch(`${url}${username}${repos}?client_id=${client_id}&client_secret=${client_secret}`)
    .then(function(data){ 
     return data.json();
     })
     .catch(function(error){
     console.error("Error",error);
     })	
     .then(function(repos){
        repos.forEach(function(repo){
        let reposData=document.getElementById("repos")
        reposData.innerHTML=` <div class="card">
        <div class="row">
          <div class="col-md-6">
            <div class="repo">
                <strong>${repo.name}</strong>: ${repo.description}
            </div>
          </div>
          <div class="col-md-4">
            <span class="badge badge-danger">Forks: ${repo.forks_count}</span>
            <span class="badge badge-warning">Watchers: ${repo.watchers_count}</span>
            <span class="badge badge-dark">Stars: ${repo.stargazers_count}</span>
          </div>
          <div class="col-md-2">
            <a href="${repo.html_url}" target="_blank" class="btn btn-info btn-bg">Repo Page</a>
          </div>
        </div>
      </div>`
    document.body.appendChild(reposData);
     });
    });
     
});
});
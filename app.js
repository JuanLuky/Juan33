const LinksSocial = {
    github: 'JuanLuky',
    instagram: 'ujuan._',
    linkedln: 'Juan Santos'
}


function getGitHubProfile() {
    const name = document.getElementById('title')
    const biography = document.getElementById('biography')
    const perfil = document.getElementById('perfil')

    const url = `https://api.github.com/users/${LinksSocial.github}`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        name.textContent = data.name;
        biography.textContent = data.bio;
        perfil.src = data.avatar_url;
    })
}
getGitHubProfile();
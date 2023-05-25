document.addEventListener('DOMContentLoaded', () => {
    // Capturando elementos
    const avatar = document.querySelector('[data-avatar]');
    const name = document.querySelector('[data-name]');
    const userName = document.querySelector('[data-user-name]');
    const repos = document.querySelector('[data-repos]')
    const followers = document.querySelector('[data-followers]')
    const following = document.querySelector('[data-following]')
    const urlLink = document.querySelector('[data-urlLinks]')



    const endpoint = 'https://api.github.com/users/bcdias';

    fetch(endpoint)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            avatar.src = json.avatar_url
            name.innerText = json.name
            userName.innerText = `@${json.login}`
            repos.innerText = json.public_repos
            followers.innerText = json.followers
            following.innerText= json.following
            urlLink.href = json.html_url
        })
})
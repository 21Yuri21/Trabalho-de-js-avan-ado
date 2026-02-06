const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    username: '',
    followers: '',
    following: '',
    language: [],
    forksCount: [],
    stargazersCount: [],
    watchersCount: [],
    repositories: [],
    setInfo(gitHubUser) {
        this.username = gitHubUser.login
        this.followers = gitHubUser.followers
        this.following = gitHubUser.following
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },
    setRepositories(repositories) {
        this.repositories = repositories
        this.language = repositories.map(repo => repo.language)
        this.forksCount = repositories.map(repo => repo.forks_count)
        this.stargazersCount = repositories.map(repo => repo.stargazers_count)
        this.watchersCount = repositories.map(repo => repo.watchers_count)
    }
}


export { user }
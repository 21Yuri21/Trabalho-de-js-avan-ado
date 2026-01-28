const user = {
    avatarUrl: '',
    name: '',
    bio: '',
    username: '',
    followers: '',
    following: '',
    language: '',
    forksCount: '',
    stargazersCount: '',
    watchersCount: '',
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
        this.language = repositories.language
        this.forksCount = repositories.forks_count
        this.stargazersCount = repositories.stargazers_count
        this.watchersCount = repositories.watchers_count
        this.repositories = repositories
    }
}

export { user }
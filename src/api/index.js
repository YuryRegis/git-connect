const axios = require('axios')


const GitApi = axios.create({
    timeout: 5000
})

 export async function Get(url) {
    try {
        const response = await GitApi({
            method: 'get',
            url: url
        })
        return response
    } catch ({response}) {
        console.log(`Error(${response.status}) =>`, response.data.message)
        return response
    }
}

 export async function searchRepos({search, language, page=1}) {
    console.log(`${search}, ${language}, ${page} }`)
    const languageTerm = language ? `&language=${language}` : ''
    const searchTerm = search ? search.split(' ').join('+') : ''
    const URL = `https://api.github.com/search/repositories?q=${searchTerm}${languageTerm}&sort=stars&order=desc&page=${page}`
    const response = await Get(URL)
    response.data['pages'] = Math.ceil(response.data.total_count / 30)
    return response.data
} 

 export async function getUserInfo(username) {
   console.log(`LOGANDO COM -> ${username}`)
   const response = await Get(`https://api.github.com/users/${username}`)
   return response
}

 export async function getUserFollowers(username) {
    const response = await Get(`https://api.github.com/users/${username}/followers`)
    return response.data
}

 export async function getUserFollowing(username) {
    const response = await Get(`https://api.github.com/users/${username}/following`)
    return response.data
}

 export async function getUserRepos(username) {
    const response = await Get(`https://api.github.com/users/${username}/repos`)
    return response
}

export default GitApi
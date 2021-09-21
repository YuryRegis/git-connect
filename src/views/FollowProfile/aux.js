export function sortReposByStars(repos) {
  return repos.sort((a, b) => {return b.stargazers_count - a.stargazers_count})
}


export function FirstsRepos(repos, limit) {
  return repos.slice(0, limit)
}


export function getMostPopularRepos(repos, limit) {
  return FirstsRepos(sortReposByStars(repos), limit)
}


export function getDominatingLanguage(repos) {
        
  const languageCount = {}
  
  repos.forEach(repo => {
    const {language} = repo

    if (!language) return
    else if (language in languageCount) {
      languageCount[language]++
    } else {
      languageCount[language] = 1
    }
  })

  const max = Math.max(...Object.values(languageCount))

  return Object.keys(languageCount).find(key => languageCount[key] === max)
}
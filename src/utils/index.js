// Utilities

export function truncateText(text, limit=130) {
  if (text.length > limit) {
    return text.substring(0, limit) + '...';
  }
  return text;
}

export function sortReposByStars(repos) {
    return repos.sort((a, b) => {return b.stargazers_count - a.stargazers_count})
  }
  
export function filterByLanguage(repos, language) {
  return repos.filter( repo => repo.language === language )
}

export function FirstsFromArray(repos, limit) {
    return repos.slice(0, limit)
  }
  
export function getMostPopularRepos(repos, limit) {
    return FirstsRepos(sortReposByStars(repos), limit)
  }

export function getAllLanguages(repos) {
    let languages = []
    repos.forEach(repo => {
      if (!languages.includes(repo.language))
        languages.push(repo.language)  
  })
    return languages
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

export function sortObjectByValue(obj) {
  return Object.keys(obj).sort((a, b) => obj[b] - obj[a])
}

export function getLanguagesRanking(repos) {
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

  const ordenedLanguages = {}
  const languagesRanking = sortObjectByValue(languageCount)

  languagesRanking.forEach(language => {
    ordenedLanguages[language] = languageCount[language]
  })

  return ordenedLanguages
}

export function getRankingData(ranking, data) {
  const rankingArray = []
  const rankingLanguages = Object.keys(ranking)

  rankingLanguages.forEach(language => {
    const repo = data.find(item => item.language === language)
    rankingArray.push(repo)
  })
  return rankingArray
}
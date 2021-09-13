export function sortReposByStars(repos) {
  return repos.sort((a, b) => {return b.stargazers_count - a.stargazers_count})
}

export function FirstsRepos(repos, limit) {
  return repos.slice(0, limit)
}

export function getMostPopularRepos(repos, limit) {
  return FirstsRepos(sortReposByStars(repos), limit)
}
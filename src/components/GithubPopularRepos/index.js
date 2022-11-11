import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here
class GithubPopularRepos extends Component {
  state = {activeId: 'ALL', ItemsList: [], isLoading: true, apiStatus: ''}

  componentDidMount = () => {
    this.getRepoItems()
  }

  getRepoItems = async () => {
    this.setState({isLoading: true})
    const {activeId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeId}`

    const response = await fetch(url)
    console.log(response)
    if (response.ok === true) {
      const data = await response.json()
      const updatedList = data.popular_repos.map(eachrepo => ({
        name: eachrepo.name,
        id: eachrepo.id,
        issuesCount: eachrepo.issues_count,
        forksCount: eachrepo.forks_count,
        starsCount: eachrepo.stars_count,
        avatarUrl: eachrepo.avatar_url,
      }))
      console.log(response)
      this.setState({
        ItemsList: updatedList,
        isLoading: false,
        apiStatus: 'SUCCESS',
      })
    } else if (response.status === 401) {
      this.setState({apiStatus: 'FAILURE'})
      console.log(response)
    }
  }

  getId = id => {
    this.setState({activeId: id}, this.getRepoItems)
  }

  failureView = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      alt="failure view"
    />
  )

  mainContent = () => {
    const {activeId, ItemsList, isLoading} = this.state
    const result = isLoading ? (
      <div testid="loader">
        <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
      </div>
    ) : (
      <div className="bg-container">
        <h1 className="title">Popular</h1>
        <ul>
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              details={each}
              key={each.id}
              getId={this.getId}
              isActive={each.id === activeId}
            />
          ))}
        </ul>
        <ul>
          {ItemsList.map(eachItem => (
            <RepositoryItem details={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
    return result
  }

  render() {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case 'SUCCESS':
        return this.mainContent()
      case 'FAILURE':
        return this.failureView()
      default:
        return null
    }
  }
}

export default GithubPopularRepos

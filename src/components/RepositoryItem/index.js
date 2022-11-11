// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {details} = props
  const {name, id, issuesCount, forksCount, starsCount, avatarUrl} = details
  return (
    <li className="repo-item">
      <img src={avatarUrl} alt={name} className="logo" />
      <h1 className="repo-title">{name}</h1>
      <div className="starts-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="small-logos"
        />
        <p className="repo-des">{starsCount}</p>
        <p className="repo-des">stars</p>
      </div>
      <div className="starts-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="small-logos"
        />
        <p className="repo-des">{forksCount}</p>
        <p className="repo-des"> forks</p>
      </div>

      <div className="starts-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="small-logos"
        />
        <p className="repo-des">{issuesCount}</p>
        <p className="repo-des">open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem

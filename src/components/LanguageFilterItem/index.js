// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {details, getId, isActive} = props
  const {id, language} = details

  const styledBtn = isActive ? 'selected-btn' : 'normal-btn'

  const sendId = () => {
    getId(id)
  }

  return (
    <li className="filter-item">
      <button type="button" className={styledBtn} onClick={sendId}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem

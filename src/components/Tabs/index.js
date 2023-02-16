import './index.css'

const Tabs = props => {
  const {eachTab, activeTab} = props
  const {tabId, displayText} = eachTab

  const onClickTab = () => {
    activeTab(tabId)
  }

  return (
    <li>
      <button className="tab-button" type="button" onClick={onClickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default Tabs

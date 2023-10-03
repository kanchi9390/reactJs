import './index.css'

const TabItem = prop => {
  const {tabDetails, isActive, onTabItem} = prop
  const {displayText, tabId} = tabDetails

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  const onTab = () => {
    onTabItem(tabId)
  }

  return (
    <li>
      <button
        type="button"
        className={`tab-btn ${activeTabClassName}`}
        onClick={onTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

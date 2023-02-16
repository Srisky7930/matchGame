import './index.css'

const Image = props => {
  const {eachImage, onClickButton} = props
  const {imageUrl, thumbnailUrl} = eachImage

  const onClickCategory = () => {
    onClickButton(imageUrl)
  }

  return (
    <li>
      <button className="button-image" type="button" onClick={onClickCategory}>
        <img className="image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Image

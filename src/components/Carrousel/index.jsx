import { useState } from 'react'
import './Carrousel.scss'
const Carrousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <div className='carrousel'>
      {images.length > 1 && (
        <>
          <div
            className='carrousel-arrow carrousel-arrow-left'
            onClick={() => setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1)}
          >
            <i className='fa-solid fa-chevron-left'></i>
          </div>
          <div
            className='carrousel-arrow carrousel-arrow-right'
            onClick={() => setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1)}
          >
            <i className='fa-solid fa-chevron-right'></i>
          </div>
          <div className='carrousel-counter'>
            {currentIndex + 1}/{images.length}
          </div>
        </>
      )}

      {images &&
        images.map((image, index) => (
          <img className={index == currentIndex ? 'active' : ''} key={index} src={image} alt={`Carrousel image ${index}`} />
        ))}
    </div>
  )
}
export default Carrousel

import './Gallery.scss'
import { useState, useEffect } from 'react'
import { getData } from '../../utils/api'
import Card from './../Card'
import Loader from './../Loader'

const Gallery = () => {
  const [housings, setHousings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData('/OCR-DA-P11/logements.json')
        setHousings(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div className='container-flex flex-center'><Loader /></div>
  }
  if (error) {
    return <div className='error'>Error: {error.message}</div>
  }
  return (
    <div className='gallery'>
      {housings.map(({ id, cover, title }) => (
        <Card key={id} image={cover} title={title} link={`/housing/${id}`} />
      ))}
    </div>
  )
}
export default Gallery

import { useParams, Navigate } from 'react-router'
import { useEffect, useState } from 'react'
import { getDataById } from '../utils/api'

import Carrousel from './../components/Carrousel'
import Avatar from './../components/Avatar'
import Tags from './../components/Tags'
import DropDown from './../components/Dropdown'
import Loader from './../components/Loader'
const Housing = () => {
  const { housingId } = useParams()
  const [housing, setHousing] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataById('/OCR-DA-P11/logements.json', housingId)
        if (!data) {
          throw new Error('Housing not found')
        }
        setHousing(data)
        console.log('🚀 ~ fetchData ~ data:', data)
      } catch (err) {
        console.error(`Error fetching housing data: ${err}`)
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [housingId])
  if (loading) {
    return <div className='container-flex flex-center'><Loader /></div>
  }
  if (error) {
    return <Navigate to='/OCR-DA-P11/error/404' replace />
  }
  return (
    <div className='container-flex housing flex-column'>
      {housing && (
        <>
          <Carrousel images={housing.pictures} />
          <div className='housing-info'>
            <div className='housing-info-title'>
              <h2 className='housing-title'>{housing.title}</h2>
              <p className='housing-location'>{housing.location}</p>
            </div>
            <div className='housing-info-avatar'>
              <Avatar user={housing.host} />
            </div>
            <div className='housing-info-tags'>
              <Tags tags={housing.tags} />
            </div>
            <div className='housing-info-rating'>
              <div className='rating'>
                {[...Array(5)].map((_, index) => (
                  <i key={index} className={`fa-solid fa-star ${index < housing.rating ? '' : 'empty'}`}></i>
                ))}
              </div>
            </div>
            <div className='housing-info-dropdowns'>
              <div className='housing-info-description housing-info-dropdowns-item'>
                <DropDown title='Description' content={housing.description} />
              </div>
              <div className='housing-info-equipments housing-info-dropdowns-item'>
                <DropDown title='Equipements' content={housing.equipments} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Housing

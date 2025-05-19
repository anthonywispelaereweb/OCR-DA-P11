import { useParams, Navigate }  from 'react-router';

import { useEffect, useState } from 'react';
import { getDataById } from '../utils/api';
const Housing = () => {
  const { housingId } = useParams();
  const [housing, setHousing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDataById('/logements.json', housingId);
        if (!data) {
          throw new Error('Housing not found');
        }
        setHousing(data);
        console.log("🚀 ~ fetchData ~ data:", data)
      } catch (err) {
        console.error(`Error fetching housing data: ${err}`);
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [housingId]);
  if (loading) {
    return <div className='loading'>Loading...</div>;
  }
  if (error) {
    return <Navigate to="/error/404" replace />;
  }
  return (
    <div className='container-flex housing-page flex-column'>
      {housing && (
        <div>
          <h2>{housing.title}</h2>
          <img src={housing.pictures[0]} alt={housing.title} />
          <p>{housing.description}</p>
          <p>Location: {housing.location}</p>
          <p>Tags: {housing.tags}</p>
        </div>
      )}
    </div>
  );
}

export default Housing;
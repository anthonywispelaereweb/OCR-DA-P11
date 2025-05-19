import { useParams } from 'react-router'
const ErrorPage = () => {
  const { errorId } = useParams()

  return (
    <div className='container-flex error-page flex-column flex-center'>
      <h1 className='error-number'>{errorId}</h1>
      <p className='error-message'>Oups! La page que vous demandez n'existe pas.</p>
    </div>
  )
}
export default ErrorPage

import { useParams, Link } from 'react-router'
const ErrorPage = () => {
  let { errorId } = useParams()
  if (!errorId) errorId = '404'

  return (
    <div className='container-flex error-page flex-column flex-center'>
      <h1 className='error-number'>{errorId}</h1>
      <p className='error-message'>Oups! La page que vous demandez n'existe pas.</p>
      <Link className='error-link' to={'/'}>Retournez sur la page d'accueil</Link>
    </div>
  )
}
export default ErrorPage

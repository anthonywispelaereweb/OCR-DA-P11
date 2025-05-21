import Gallery from '../components/Gallery'
import BannerImage from './../assets/banner-home.png'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <>
      <main className='container-flex flex-column'>
        <Banner imageUrl={BannerImage} title='Chez vous, partout et ailleurs' altTexte="Bannière de la page à la page d'acceuil" />

        <Gallery />
      </main>
    </>
  )
}

export default Home

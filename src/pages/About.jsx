import DropDown from '../components/Dropdown'
import Banner from '../components/Banner'
import BannerImage from './../assets/banner-about.png'
const About = () => {
  const dropDownContents = [
    {
      title: 'Fiabilité',
      content:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
    },
    {
      title: 'Respext',
      content:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comporteent disciminatoire ou de perturbation du voisinage entrainera une exclusion de notre pateforme.'
    },
    {
      title: 'Service',
      content:
        'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'
    },
    {
      title: 'Sécurité',
      content:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour nos voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien sut l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
    }
  ]
  return (
    <>
      <div className='container-flex flex-column'>
        <div className="about-banner">
          <Banner
            imageUrl={BannerImage}
            altTexte='Bannière de la page à propos'
          />
        </div>
        <div className='about-content'>
          {dropDownContents.map((item, index) => (
            <div key={index} className='about-content-item'>
              <DropDown title={item.title} content={item.content} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default About

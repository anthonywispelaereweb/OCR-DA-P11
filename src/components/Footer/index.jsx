import LogoFooter from './../../assets/logo-footer.svg'
import './Footer.scss'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <NavLink to={'/'}>
          <img src={LogoFooter} alt='KASA' className='footer-logo-img' />
        </NavLink>
      </div>
      <div className='footer-text-ctn'>
        <div className='footer-text'>&copy; 2020 Kasa.</div>
        <div className='footer-text'>All rights reserved</div>
      </div>
    </footer>
  )
}
export default Footer

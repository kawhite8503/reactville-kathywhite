// Components & Assets
import Logo from '../../assets/react-logo.png'
import { Link, NavLink } from 'react-router-dom'


import Wallet from './Wallet'

const Nav = (props) => {
  return (
    <nav className="navigation-bar">
      <NavLink to='/' id='logo'><img src={Logo} alt="logo" /></NavLink>
      <NavLink to='/burgers'>BURGER SHOP</NavLink>
      <Link to='/market'>SuperMarket</Link>
      <Wallet cash={props.cash}/>
    </nav>
  )
}

export default Nav
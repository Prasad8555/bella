import Logo from '../../images/bellaLogo.jpg'
import {Link} from 'react-router-dom'
import {RiShoppingBag3Line} from 'react-icons/ri'
import './index.scss'

const Navbar = () => {
    return(
        <nav>
            <ul>
                <Link to="/"><li className='nav-item'><img src={Logo} alt="logo" /></li></Link>
                <Link to="/" className='link'><li className='nav-item active'>Home</li></Link>
                <Link className='link'><li className='nav-item'>Shop</li></Link>
                <Link to="/favorites"  className='link'><li className='nav-item'>Favorites</li></Link>
                <Link className='link' to=""><li  className='nav-item'>Orders</li></Link>
                <Link className='link'><li className='nav-item'>Contact</li></Link>
            </ul>
            <div>
                <p>Profile</p>
                <Link to="/cart" className='cart'><RiShoppingBag3Line /></Link>
            </div>
        </nav>
    )
}

export default Navbar
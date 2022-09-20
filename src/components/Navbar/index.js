import Logo from '../../images/bellaLogo.jpg'
import {Link} from 'react-router-dom'
import './index.scss'

const Navbar = () => {
    return(
        <nav>
            <ul>
                <Link to="/"><li><img src={Logo} alt="logo" /></li></Link>
                <Link to="/" className='link'><li>Home</li></Link>
                <Link><li>Shop</li></Link>
                <Link to="/favorites"  className='link'><li>Favorites</li></Link>
                <Link to=""><li>Orders</li></Link>
                <Link><li>Contact</li></Link>
            </ul>
            <div>
                <p>Profile</p>
                <Link to="/cart" className='link'>Cart</Link>
            </div>
        </nav>
    )
}

export default Navbar
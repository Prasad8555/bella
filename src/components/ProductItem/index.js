import {Link} from 'react-router-dom'
import './index.scss'

const Product = ({product}) => {
    const {productId, imageURL, name, price} = product
    return(
        <Link className='product-link' to={`/products/${productId}`}>
            <li className='cart-product'>
                <img src={imageURL} alt="product" className='cart-img' />
                <div>
                    <h1>{name}</h1>
                    <p>${price} USD</p>
                </div>
            </li>
        </Link>

        )
    }

export default Product
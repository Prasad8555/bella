import {Link} from 'react-router-dom'
import './index.scss'

const Product = ({product}) => {
    const {productId, imageURL, name, price} = product
    return(
        <Link to={`/products/${productId}`}>
            <li>
                <img src={imageURL} alt="product" />
                <div>
                    <h1>{name}</h1>
                    <p>${price} USD</p>
                </div>
            </li>
        </Link>

        )
    }

export default Product
import { useSelector } from 'react-redux'
import Navbar from '../Navbar'
import Product from '../ProductItem'

import './index.scss'

const Home = () => {
    const {products} = useSelector((state) => state.products)

    return(
        <div className='home-background-container'>
            <Navbar />
            <ul className='products'>
                {products.map(eachProduct => <Product key={eachProduct.productId} product={eachProduct} />)}
            </ul>
        </div>
    )
}

export default Home
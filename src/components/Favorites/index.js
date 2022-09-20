import { useSelector } from "react-redux"
import Product from '../ProductItem'
import Navbar from "../Navbar"
import './index.scss'

const Favorites = () => {
    const {products} = useSelector((state) => state.products)
    const favoriteProducts = products.filter(each => each.isFavorites === true)
    console.log(favoriteProducts)
    const favoriteProductsLength = favoriteProducts.length
    console.log(favoriteProductsLength)

    return(
        <div className="favorites-bg-container">
            <Navbar />
            <h1>Favorites</h1>
            {favoriteProductsLength > 0 ? (<ul>{favoriteProducts.map((each) => <Product product={each} key={each.productId} />)}</ul>) : (<h1>No Favorites</h1>)}
        </div>
    )
}

export default Favorites
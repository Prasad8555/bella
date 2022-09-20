import { useSelector } from "react-redux"
import Product from '../ProductItem'
import Navbar from "../Navbar"
import './index.scss'

const Favorites = () => {
    const {products} = useSelector((state) => state.products)
    const favoriteProducts = products.filter(each => each.isFavorite === true)
    const favoriteProductsLength = favoriteProducts.length

    return(
        <div className="favorites-bg-container">
            <Navbar />
            <h1 className="favorite-heading">Favorites</h1>
            {favoriteProductsLength > 0 ? (<ul className="fevorite-items">{favoriteProducts.map((each) => <Product product={each} key={each.productId} />)}</ul>) : (<div className="no-fav">No Favorites</div>)}
        </div>
    )
}

export default Favorites
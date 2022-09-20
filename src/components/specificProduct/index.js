import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, toggleFavorites } from '../../features/productsSlice';
import Navbar from '../Navbar/index'
import './index.scss'


const SpecificProduct = () => {
    const {id} = useParams()
    const {products} = useSelector((state) => state.products)
    const [product] = products.filter((eachProduct) => eachProduct.productId === id)
    const {productId, imageURL, name, brandName, price, productCount} = product
    const dispatch = useDispatch()

    const onClickToggleFavorite = () => {
        dispatch(toggleFavorites({productId}))
    }

    const onClickAddCart = () => {
        dispatch(addToCart({productId}))
    }


    return(
        <div className='product-item'>
            <Navbar />
            <div>
                <img src={imageURL} alt="specific-product" />
                <div>
                    <p>{brandName}</p>
                    <h1>{name}</h1>
                    <p>You can buy amazing products like this on Hollister's website. Link on the licensing page. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.</p>
                    <h1>{price}</h1>
                    <h1>{productCount}</h1>
                    <button type='button' onClick={onClickAddCart}>ADD TO CART</button>
                    <button type="button" onClick={onClickToggleFavorite}>Add To Favorites</button>
                </div>
            </div>
        </div>
    )
}

export default SpecificProduct
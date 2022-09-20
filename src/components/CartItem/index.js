import { useDispatch } from "react-redux"
import { increaseCount, decreaseCount } from "../../features/productsSlice"
import './index.scss'

const CartItem = ({product}) => {
    const {productId, imageURL, name, brandName, productCount, price} = product
    const dispatch = useDispatch()

    const onClickDecrese = () => {
        dispatch(decreaseCount({productId}))
    }

    const onClickIncrese = () => {
        dispatch(increaseCount({productId}))
    }

    return(
        <li className="cart-item">
            <img src={imageURL} alt="cart-item" />
            <div className="item-details">
                <h1>{name}</h1>
                <p>{brandName}</p>
            </div>
            <div className="counter"><button type="button" onClick={onClickIncrese} className="plus">+</button><p className="count">{productCount}</p><button type="button" onClick={onClickDecrese} className='minus'>-</button></div>
            <h1 className="price">${price * productCount} USD</h1>
        </li>
    )
}

export default CartItem
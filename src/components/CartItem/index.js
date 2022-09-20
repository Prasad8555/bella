import { useDispatch } from "react-redux"
import { increaseCount, decreaseCount } from "../../features/productsSlice"

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
        <li>
            <img src={imageURL} alt="cart-item" />
            <div>
                <h1>{name}</h1>
                <p>{brandName}</p>
                <div><p>{productCount}</p><button type="button" onClick={onClickIncrese}>+</button><button type="button" onClick={onClickDecrese}>-</button></div>
                <p>{price * productCount}</p>
            </div>
        </li>
    )
}

export default CartItem
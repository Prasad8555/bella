import { useSelector } from 'react-redux'
import Navbar from '../Navbar'
import CartItem from '../CartItem'

const Cart = () => {
    const {products} = useSelector((state) => state.products)
    const CartProducts = products.filter(each => each.isInCart === true)
    const CartProductsLength = CartProducts.length
    
    return(
        <div>
            <Navbar />
            {CartProductsLength !== 0 ? (<ul>{CartProducts.map(each => <CartItem product={each} key={each.productId} />)}</ul>): (<div><h1>Cart is empty</h1></div>)}
        </div>
    )
}

export default Cart
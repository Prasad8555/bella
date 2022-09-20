import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {resetProducts} from '../../features/productsSlice'
import Navbar from '../Navbar'
import CartItem from '../CartItem'
import './index.scss'

const Cart = () => {
    const [showForm, changeFormStatus] = useState(false)
    const [phone, changePhone] = useState('')
    const [firstName, changeFirstName] = useState('')
    const [lastName, changeLastName] = useState('')
    const [address, changeAddress] = useState('')
    const [email, changeEmail] = useState('')

    const {products} = useSelector((state) => state.products)
    const CartProducts = products.filter(each => each.isInCart === true)
    const CartProductsLength = CartProducts.length

    const sumValues = CartProducts.map(each => each.price * each.productCount )
    const total =  sumValues.reduce((partialSum, a) => partialSum + a, 0)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const placeOrder = (e) => {
        e.preventDefault()
        if (phone !== '' && firstName !== '' && lastName !== '' && address !== '' && email !== ''){
            navigate('/')
            dispatch(resetProducts())
        }
    }

    const onChangeEmail = (e) => {
        changeEmail(e.target.value)
    }

    const onChangeAddress = (e) => {
        changeAddress(e.target.value)
    }

    const onChangeLName = (e) => {
        changeLastName(e.target.value)
    }

    const onChangeFName = (e) => {
        changeFirstName(e.target.value)
    }

    const onChangePhone = (e)=>{
        changePhone(e.target.value)
    }

    const onClickPlaceOrder = () => {
        changeFormStatus(!showForm)
    }
    
    return(
        <div className='cart-bg-container'>
            <Navbar />
            {showForm && (<div className='place-order-form'>
                    <form onSubmit={placeOrder}>
                        <h1>Place Your Order</h1>
                        <input placeholder='Phone' value={phone} onChange={onChangePhone} />
                        <input placeholder='First Name' value={firstName} onChange={onChangeFName} />
                        <input placeholder='Last Name' value={lastName} onChange={onChangeLName} />
                        <input placeholder='Address' value={address} onChange={onChangeAddress} />
                        <input placeholder='Email' value={email} onChange={onChangeEmail} />
                        <button type="submit">Place Order</button>
                    </form>
                </div>) }
            {CartProductsLength !== 0 ? (<><ul className='cart-items'>{CartProducts.map(each => <CartItem product={each} key={each.productId} />)}</ul><hr />
            <div className='bottom-section'>
                <div>
                    <p>Free Delivery</p>
                    <p>Total: {total}</p>
                    <button type='button' onClick={onClickPlaceOrder}>Place Order</button>
                </div>
            </div></>): (<div className='empty-cart'><h1>Cart is empty</h1></div>)}
        </div>
    )
}

export default Cart
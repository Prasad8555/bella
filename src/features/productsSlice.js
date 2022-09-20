import { createSlice } from "@reduxjs/toolkit";

const products = [
  {
    "name": "EUROLINE 810 POP UP 700 W Pop Up Toaster  (White)",
    "productId": "EURO19938201",
    "brandName": "EUROLINE",
    "category": "Pop Up Toasters",
    "companyAssured": false,
    "rating": "4.2",
    "price": "12232",
    "discount": "50%",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/k5lcvbk0/pop-up-toaster/2/j/w/euroline-820-pop-up-810-pop-up-original-imafz8h3duveqgh7.jpeg?q=70",
    "sellerName": "telform inc.",
    "isNewProduct": true
  },
  {
    "name": "Morphy Richards 25 L Convection Microwave Oven  (MWO 25CG, Steel)",
    "productId": "EURO19938202",
    "brandName": "Morphy",
    "category": "Microwave Ovens",
    "companyAssured": true,
    "rating": "3.9",
    "price": "10999",
    "discount": "11%",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/microwave-new/v/q/y/morphy-richard-25cg-original-imaec2ddymudmze3.jpeg?q=70",
    "sellerName": "Kwitch Retails",
    "isNewProduct": false
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO19938203",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO19938204",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO19938205",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO19938206",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO19938207",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO19938208",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO19938209",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO199382010",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO199382011",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO199382012",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO199382013",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO199382014",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO199382015",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO199382016",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO199382017",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO199382018",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO199382019",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  },
  {
    "name": "Fitbit Inspire 2  (Desert Rose Strap, Size : Regular)",
    "productId": "EURO199382020",
    "brandName": "Fitbit",
    "category": "Smart Bands",
    "companyAssured": true,
    "rating": "3.9",
    "price": "17992",
    "discount": "",
    "imageURL": "https://rukminim1.flixcart.com/image/416/416/khmbafk0/smart-band-tag/u/z/6/no-yes-fb418bkcr-android-ios-fitbit-yes-original-imafxhe4ff7ys5bc.jpeg?q=70",
    "sellerName": "RetailNet",
    "isNewProduct": true
  }
]

const updatedProducts = products.map(eachProduct => ({...eachProduct, isInCart: false, productCount: 0, isFavorite: false}))

const initialState = {
    products: updatedProducts,
}

const loadState = () => {
    let state
    try{
        const serialisedState = window.localStorage.getItem('bella_products')
        if (!serialisedState){
            state = initialState
            const serialisedState2 = JSON.stringify(state)
            window.localStorage.setItem('bella_products', serialisedState2)
        }else{
            state = JSON.parse(serialisedState)
        } 
    }catch (err){
            console.log("error")
        }
        return state
}

// calling loadState function 
let state =  loadState()

const productsSlice = createSlice({
    name: 'products',
    initialState: state,
    reducers: {
      addToCart: (state, action) => {
        const {productId} = action.payload
        const product = state.products.find(each => each.productId === productId)
        product.isInCart = true
        product.productCount = product.productCount + 1
      },
      increaseCount: (state, action) => {
        const {productId} = action.payload
        const product = state.products.find(each => each.productId === productId)
        product.productCount = product.productCount + 1
      },
      decreaseCount : (state, action) => {
        const {productId} = action.payload
        const product = state.products.find(each => each.productId === productId)
        if (product.productCount === 1) {
          product.isInCart = false
          product.productCount = 0
        }
        else{
          product.productCount = product.productCount - 1
        }
      },
      toggleFavorites: (state, action) => {
        const {productId} = action.payload
        const product = state.products.find(each => each.productId === productId)
        product.isFavorite = !product.isFavorite
      },
      resetProducts: (state) => {
        state.products = updatedProducts
      }
    }
})

export const {addToCart, increaseCount, decreaseCount, toggleFavorites, resetProducts} = productsSlice.actions

export default productsSlice.reducer
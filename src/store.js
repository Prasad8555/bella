import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../src/features/productsSlice'

export const store = configureStore({
    reducer: {
        products: productsReducer,
    }
})

const saveState = (state) => {
    try{
        const serialisedState = JSON.stringify(state.products);
        window.localStorage.setItem('bella_products', serialisedState)
    }catch(error){
        console.log("Error")
    }
}

store.subscribe(() => {
    saveState(store.getState())
})

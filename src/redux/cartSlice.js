import { createSlice } from "@reduxjs/toolkit"

const items = localStorage.getItem('cartItems') !== null ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
    value: items
}

export const cartSlice = createSlice({
    name: 'cartItems',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload
            //Check duplicated Item
            const duplicated = state.value.filter(e => e.slug === newItem.slug && e.size === newItem.size)
            //Merge the quantity property of duplicated items & remove them.
            if (duplicated.length > 0) {
                state.value = state.value.filter(e => e.slug !== newItem.slug || e.size !== newItem.size)
                state.value = [...state.value, {
                    id: duplicated[0].id,
                    slug: newItem.slug,
                    size: newItem.size,
                    price: newItem.price,
                    quantity: newItem.quantity + duplicated[0].quantity
                }]
            } else {
                state.value = [...state.value, {
                    ...action.payload,
                    id: state.value.length > 0 ? state.value[state.value.length - 1].id + 1 : 1
                }]
            }
            localStorage.setItem('cartItems', JSON.stringify(state.value.sort((a, b) => {
                return (a.id > b.id) ? 1 : (a.id < b.id ? -1 : 0)
            })))
            console.log(state.value)
        },

        updateItem: (state, action) => {
            const newItem = action.payload
            const duplicated = state.value.filter(e => e.slug === newItem.slug && e.size === newItem.size)
            if (duplicated.length > 0) {
                state.value = state.value.filter(e => e.slug !== newItem.slug || e.size !== newItem.size)
                state.value = [...state.value, {
                    id: duplicated[0].id,
                    slug: newItem.slug,
                    size: newItem.size,
                    price: newItem.price,
                    quantity: newItem.quantity
                }]
            }
            localStorage.setItem('cartItems', JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))))
        },

        removeItem: (state, action) => {
            const item = action.payload
            state.value = state.value.filter(e => e.slug !== item.slug || e.size !== item.size)
            localStorage.setItem('cartItems', JSON.stringify(state.value.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))))
        }
    }
})

export const { addItem, updateItem, removeItem } = cartSlice.actions

export default cartSlice.reducer
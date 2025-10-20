import React, { createContext, useContext, useReducer, useEffect } from 'react'

const CartContext = createContext()

const initialState = {
    items: [],
    shipping: null,
    orders: [],
}

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existing = state.items.find(i => i.id === action.payload.id)
            if (existing) {
                return {
                    ...state,
                    items: state.items.map(i =>
                        i.id === action.payload.id ? { ...i, quantity: i.quantity + 1 } : i
                    ),
                }
            }
            return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] }
        }
        case 'REMOVE_ITEM':
            return { ...state, items: state.items.filter(i => i.id !== action.payload) }
        case 'SET_QUANTITY':
            return {
                ...state,
                items: state.items.map(i =>
                    i.id === action.payload.id ? { ...i, quantity: action.payload.quantity } : i
                ),
            }
        case 'CLEAR':
            return { ...state, items: [], shipping: null }
        case 'SET_SHIPPING':
            return { ...state, shipping: action.payload }
        case 'ADD_ORDER':
            return { ...state, orders: [action.payload, ...state.orders], items: [] }
        default:
            return state
    }
}

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState, (init) => {
        try {
            const raw = localStorage.getItem('cartState')
            return raw ? JSON.parse(raw) : init
        } catch {
            return init
        }
    })

    useEffect(() => {
        try {
            localStorage.setItem('cartState', JSON.stringify(state))
        } catch {
            // ignore localStorage errors
        }
    }, [state])

    const addItem = (product) => dispatch({ type: 'ADD_ITEM', payload: product })
    const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', payload: id })
    const setQuantity = (id, quantity) => dispatch({ type: 'SET_QUANTITY', payload: { id, quantity } })
    const clear = () => dispatch({ type: 'CLEAR' })
    const setShipping = (shipping) => dispatch({ type: 'SET_SHIPPING', payload: shipping })

    const createOrder = (overrides = {}) => {
        const totalPrice = state.items.reduce((s, i) => s + i.quantity * i.price, 0)
        
        // Obtener usuario actual para asociar el pedido
        let userId = null
        try {
            const usuario = JSON.parse(localStorage.getItem('usuario') || 'null')
            userId = usuario?.id || null
        } catch {
            // Si no se puede obtener el usuario, continuar sin userId
        }
        
        const order = {
            id: `order_${Date.now()}`,
            userId,
            items: state.items,
            total: totalPrice,
            shipping: overrides.shipping || state.shipping || null,
            createdAt: new Date().toISOString(),
        }
        dispatch({ type: 'ADD_ORDER', payload: order })
        return order
    }

    const totalItems = state.items.reduce((s, i) => s + i.quantity, 0)
    const totalPrice = state.items.reduce((s, i) => s + i.quantity * i.price, 0)

    return (
        <CartContext.Provider value={{ items: state.items, addItem, removeItem, setQuantity, clear, setShipping, createOrder, shipping: state.shipping, orders: state.orders, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)

export default CartContext

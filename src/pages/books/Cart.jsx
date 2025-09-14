import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getImgUrl } from '../../utils/getImgUrl'
import { clearCart, removeFromCart } from '../../redux/features/cart/cartSlice'

const Cart = () => {
    const cartItems = useSelector(state => state.cart.cartItems)
    const dispatch = useDispatch()
    const totalPrice = cartItems.reduce((acc,item)=>acc+item.newPrice,0).toFixed(2)



    const handleRemoveFromCart = (product) =>{
        dispatch(removeFromCart(product))
    }
    const handleclearCart =()=>{
        dispatch(clearCart())
    }
    return (
        <>
            <div className="min-h-screen bg-white p-4 md:p-10">
                <div className="max-w-full mx-auto grid md:grid-cols-3 gap-8">

                    {/* LEFT SECTION – Cart Items */}
                    <div className="md:col-span-2 bg-gray-50 p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">Shopping Cart</h2>
                            <button
                                onClick={() => {handleclearCart()}}
                                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium">
                                Clear Cart
                            </button>
                        </div>

                        <div className="mt-8">
                            <div className="flow-root">
                                {
                                    cartItems.length > 0 ? (
                                        <ul role='list' className="divide-y divide-gray-200">
                                            {/* Cart Item */}
                                            {
                                                cartItems.map(product => (
                                                    <li key={product._id} className="flex py-6">
                                                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                            <img alt="" src={`${getImgUrl(product.coverImage)}`} className="h-full w-full object-cover -center" />
                                                        </div>

                                                        <div className="ml-4 flex flex-1 flex-col">
                                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                                <h3>
                                                                    <Link className='font-bold' to="/">{product.title}</Link>
                                                                </h3>
                                                                <p>${product.newPrice}</p>
                                                            </div>
                                                            <p className="mt-1 text-sm text-gray-500 capitalize">
                                                                <strong>Category:</strong>{product.category}
                                                            </p>
                                                            <div className="flex-1 flex items-end justify-between text-sm mt-4">
                                                                <p className="text-gray-500">
                                                                    <strong>Qty:</strong> 1
                                                                </p>
                                                                <button onClick={()=>handleRemoveFromCart(product)}
                                                                    type="button" className="font-bold text-indigo-600 hover:text-indigo-500">
                                                                    Remove
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                            {/* End of Cart Item */}

                                            {/* Duplicate <li> block for more items dynamically */}
                                        </ul>
                                    ) : (<p>No Products Found...</p>)
                                }
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SECTION – Checkout Summary */}
                    <div className="bg-gray-50 p-6 h-64 rounded-lg shadow-md">
                        <div className="flex justify-between font-medium text-gray-900 mb-4 text-2xl">
                            <p>Subtotal</p>
                            <p>${totalPrice ? totalPrice : 0}</p>
                        </div>
                        <p className="text-sm text-gray-500 mb-6">
                            Shipping and taxes calculated at checkout.
                        </p>
                        <Link
                            to="/checkout"
                            className="block w-full bg-indigo-600 text-white text-center py-3 rounded-md hover:bg-indigo-700 font-medium"
                        >
                            Checkout
                        </Link>
                        <div className="mt-6 text-center text-sm text-gray-500">
                            <span>or</span>
                            <Link to="/" className="ml-1 font-medium text-indigo-600 hover:text-indigo-500">
                                Continue Shopping &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart
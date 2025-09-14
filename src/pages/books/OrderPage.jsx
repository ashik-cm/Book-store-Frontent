import React from 'react'
import { useGetOrdersByEmailQuery } from '../../redux/features/orders/ordersApi'
import { useAuth } from '../../context/AuthContext'

const OrderPage = () => {
    const { currentUser } = useAuth()
    const { data: orders = [], isLoading, isError } = useGetOrdersByEmailQuery(currentUser.email)
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error getting orders..!</div>
    return (
        <div className='container mx-auto p-6'>
            <h2 className='text-2xl font-bold mb-4'>Your Orders</h2>
            {
                orders.length === 0 ?
                    (<div className='font-bold text bg-red-600'>No orders Found...!</div>) :
                    (
                        
                        orders.map((orders, index) => (
                            <div className="container mx-auto p-6">
                                <div className="bg-white rounded shadow-lg p-4">
                                    <p className='bg-green-200 rounded ps-3 py-2'>Order{index+1}</p>
                                    <div key={orders._id} className="border-b mb-4 pb-4"></div>
                                    <h2 className="font-bold">Order ID:{orders._id}</h2>
                                    <p className="text-gray-600 font-bold">Name: <span className="text-gray-600 font-medium">{orders.name}</span></p>
                                    <p className="text-gray-600 font-bold">Email: <span className="text-gray-600 font-medium ">{orders.email}</span></p>
                                    <p className="text-gray-600 font-bold">Phone: <span className="text-gray-600 font-medium ">{orders.phone}</span></p>
                                    <p className="text-gray-600 font-bold">Total Price(Rs): <span className="text-gray-600 font-medium">{orders.totalPrice}</span> </p>
                                    <h3 className="font-semibold mt-2">Address:</h3>
                                    <p>{orders.name}<br></br>
                                        {orders.address.city} {orders.address.state} {orders.address.country}<br></br>{orders.address.zipcode}</p>
                                    <h3 className="font-semibold mt-2">Products Id:</h3>
                                    <ul>
                                        {
                                            orders.productIds.map((productId)=>(
                                                <li key={productId}>{productId}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
    ))
                        
                    )
            }
        </div >
    )
}

export default OrderPage




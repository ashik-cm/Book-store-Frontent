import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdIncompleteCircle } from 'react-icons/md'
import getBaseURL from '../../utils/baseURL';
import Loading from '../../components/Loading';
import { IoMdTrendingUp } from "react-icons/io";
import { IoMdTrendingDown } from "react-icons/io";
import { AiFillProduct } from "react-icons/ai";
import { LuHistory } from "react-icons/lu";
import { FaCalendarMinus } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";





// import RevenueChart from './RevenueChart';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  // console.log(data)
  const navigate = useNavigate()
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${getBaseURL()}/api/admin`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        })

        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchData();

  }, []);

  console.log(data)

  if (loading) return <Loading />

  return (
    <>
      {/* <section className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
            <AiFillProduct className='size-6' />
          </div>
          <div>
            <span className="block text-2xl font-bold">{data?.totalBooks}</span>
            <span className="block text-gray-500">Products</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-green-600 bg-green-100 rounded-full mr-6">
            <IoMdTrendingUp className='size-6' />
          </div>
          <div>
            <span className="block text-2xl font-bold">${data?.totalSales}</span>
            <span className="block text-gray-500">Total Sales</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-red-600 bg-red-100 rounded-full mr-6">
            <IoMdTrendingDown className='size-6' />
          </div>
          <div>
            <span className="inline-block text-2xl font-bold">{data?.trendingBooks}</span>
            <span className="inline-block text-xl text-gray-500 font-semibold">(13%)</span>
            <span className="block text-gray-500">Trending Books in This Month</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-blue-600 bg-blue-100 rounded-full mr-6">
            <MdIncompleteCircle className='size-6' />
          </div>
          <div>
            <span className="block text-2xl font-bold">{data?.totalOrders}</span>
            <span className="block text-gray-500">Total Orders</span>
          </div>
        </div>
      </section>
      <section className="grid md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col gap-6">
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-yellow-600 bg-yellow-100 rounded-full mr-6">
            <FaCalendarMinus className='size-6' />
          </div>
          <div>
            <span className="block text-2xl font-bold">02</span>
            <span className="block text-gray-500">Orders left</span>
          </div>
        </div>
        <div className="flex items-center p-8 bg-white shadow rounded-lg">
          <div className="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-teal-600 bg-teal-100 rounded-full mr-6">
            <LuHistory className='size-6' />
          </div>
          <div>
            <span className="block text-2xl font-bold">139</span>
            <span className="block text-gray-500">Website visits (last day)</span>
          </div>
        </div>
        <div className="row-span-3 bg-white shadow rounded-lg">
          <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
            <span>Users by average order</span>
          </div>
          <div className="overflow-y-auto" style={{ maxHeight: '24rem' }}>
            <ul className="p-6 space-y-6">
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/82.jpg" alt="Annette Watson profile picture" />
                </div>
                <span className="text-gray-600">Annette Watson</span>
                <span className="ml-auto font-semibold">9.3</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/81.jpg" alt="Calvin Steward profile picture" />
                </div>
                <span className="text-gray-600">Calvin Steward</span>
                <span className="ml-auto font-semibold">8.9</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/80.jpg" alt="Ralph Richards profile picture" />
                </div>
                <span className="text-gray-600">Ralph Richards</span>
                <span className="ml-auto font-semibold">8.7</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/79.jpg" alt="Bernard Murphy profile picture" />
                </div>
                <span className="text-gray-600">Bernard Murphy</span>
                <span className="ml-auto font-semibold">8.2</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/78.jpg" alt="Arlene Robertson profile picture" />
                </div>
                <span className="text-gray-600">Arlene Robertson</span>
                <span className="ml-auto font-semibold">8.2</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/women/77.jpg" alt="Jane Lane profile picture" />
                </div>
                <span className="text-gray-600">Jane Lane</span>
                <span className="ml-auto font-semibold">8.1</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/76.jpg" alt="Pat Mckinney profile picture" />
                </div>
                <span className="text-gray-600">Pat Mckinney</span>
                <span className="ml-auto font-semibold">7.9</span>
              </li>
              <li className="flex items-center">
                <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                  <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Norman Walters profile picture" />
                </div>
                <span className="text-gray-600">Norman Walters</span>
                <span className="ml-auto font-semibold">7.7</span>
              </li>
            </ul>
          </div>
        </div>
      </section> */}
      <section className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-6">
  {/* Left side stats in 2 rows, 3 cards each */}
  <div className="col-span-2">
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Products */}
      <div className="flex items-center p-6 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-14 w-14 text-purple-600 bg-purple-100 rounded-full mr-4">
          <AiFillProduct className="size-6" />
        </div>
        <div>
          <span className="block text-2xl font-bold">{data?.totalBooks}</span>
          <span className="block text-gray-500">Products</span>
        </div>
      </div>

      {/* Total Sales */}
      <div className="flex items-center p-6 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-14 w-14 text-green-600 bg-green-100 rounded-full mr-4">
          <IoMdTrendingUp className="size-6" />
        </div>
        <div>
          <span className="block text-2xl font-bold truncate max-w-[120px]">
            {new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD"
            }).format(data?.totalSales || 0)}
          </span>
          <span className="block text-gray-500">Total Sales</span>
        </div>
      </div>

      {/* Trending Books */}
      <div className="flex items-center p-6 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-14 w-14 text-red-600 bg-red-100 rounded-full mr-4">
          <IoMdTrendingDown className="size-6" />
        </div>
        <div>
          <span className="block text-2xl font-bold">{data?.trendingBooks}</span>
          <span className="block text-sm text-gray-500 font-semibold">(13%)</span>
          <span className="block text-gray-500">Trending This Month</span>
        </div>
      </div>

      {/* Total Orders */}
      <div className="flex items-center p-6 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-14 w-14 text-blue-600 bg-blue-100 rounded-full mr-4">
          <MdIncompleteCircle className="size-6" />
        </div>
        <div>
          <span className="block text-2xl font-bold">{data?.totalOrders}</span>
          <span className="block text-gray-500">Total Orders</span>
        </div>
      </div>

      {/* Orders left */}
      <div className="flex items-center p-6 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-14 w-14 text-yellow-600 bg-yellow-100 rounded-full mr-4">
          <FaCalendarMinus className="size-6" />
        </div>
        <div>
          <span className="block text-2xl font-bold">02</span>
          <span className="block text-gray-500">Orders left</span>
        </div>
      </div>

      {/* Website visits */}
      <div className="flex items-center p-6 bg-white shadow rounded-lg">
        <div className="inline-flex flex-shrink-0 items-center justify-center h-14 w-14 text-teal-600 bg-teal-100 rounded-full mr-4">
          <LuHistory className="size-6" />
        </div>
        <div>
          <span className="block text-2xl font-bold">139</span>
          <span className="block text-gray-500">Website visits (last day)</span>
        </div>
      </div>
    </section>
  </div>

  {/* Right side: Users by average order */}
  <div className="bg-white shadow rounded-lg overflow-hidden">
    <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
      <span>Users by average order</span>
    </div>
    <div className="overflow-y-auto" style={{ maxHeight: "30rem" }}>
      <ul className="p-6 space-y-6">
        {data?.usersByAverageOrder?.length > 0 ? (
          data.usersByAverageOrder.map((user, i) => (
            <li key={i} className="flex items-center">
              <div className="h-10 w-10 mr-3 bg-gray-100 rounded-full overflow-hidden">
                <img
                  src={user.avatar || "https://via.placeholder.com/40"}
                  alt={`${user.name} profile`}
                />
              </div>
              <span className="text-gray-600">{user.name}</span>
              <span className="ml-auto font-semibold">
                {user.avgOrder.toFixed(2)}
              </span>
            </li>
          ))
        ) : (
          <p className="text-gray-400 text-center">No user data available</p>
        )}
      </ul>
    </div>
  </div>
</section>


      <section className="text-center font-thin text-gray-500">
        @ 2025 bookStore Dashboard created by ashik
      </section>
    </>
  )
}

export default Dashboard
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import getBaseURL from "../../../utils/baseURL";

// const orderApi = createApi({
//     reducerPath:'ordersApi',
//     baseQuery: fetchBaseQuery({
//         baseUrl:`${getBaseURL()}/api/orders`,
//         credentials: "include"
//     }),
//     tagTypes:['Orders'],
//     endpoints: (builder)=>({
//         createOrder:(builder.mutation)({
//             query:(newOrder) =>({
//                 url:'/',
//                 method:'POST',
//                 body: newOrder,
//                 credentials:'include'
//             })
//         }),
//         getOrdersByEmail:(builder.query)({
//             query:(email)=>({
//                 url:'/email/:email',
//             }),
//             providesTags:['Orders']
//         })

//     })
// }) 

// export const {useCreateOrderMutation,useGetOrdersByEmailQuery} = orderApi
// export default orderApi


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../../../utils/baseURL";

const orderApi = createApi({
  reducerPath: "ordersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/orders`,
    credentials: "include",
  }),
  tagTypes: ["Orders"],
  endpoints: (builder) => ({
    // Create Order
    createOrder: builder.mutation({
      query: (newOrder) => ({
        url: "/",
        method: "POST",
        body: newOrder,
      }),
      invalidatesTags: ["Orders"], // refresh cache after creating order
    }),

    // Get Orders by Email
    getOrdersByEmail: builder.query({
      query: (email) => ({
        url: `/email/${email}`, // dynamic email
      }),
      providesTags: ["Orders"],
    }),
  }),
});

export const { useCreateOrderMutation, useGetOrdersByEmailQuery } = orderApi;
export default orderApi;

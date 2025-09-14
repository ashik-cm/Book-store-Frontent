// const { createApi, fetchBaseQuery } = require("@reduxjs/toolkit/query/react");
// const { default: getBaseURL } = require("../../../utils/baseURL");

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import getBaseURL from "../../../utils/baseURL";

const  baseQuery = fetchBaseQuery({
    baseUrl: `${getBaseURL()}/api/books`,
    credentials: 'include',
    prepareHeaders: (headers) => {
        const token =  localStorage.getItem('token');
        if(token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        return headers;
    }
})

const bookApi = createApi({
    reducerPath:'bookApi',
    baseQuery,
    tagTypes: ['Books'],
    endpoints:(builder)=>({
        fetchAllBooks : builder.query({
            query:()=>'/',
            providesTags:['Books']
        }),
        fetchBookById : builder.query({
            query: (id)=> `/${id}`,
            providesTags:(result,error,id) => [{type:"Books",id}],
        }),
        addBook : builder.mutation({
            query: (newbook) =>({
                url:`/create-book`,
                method:`POST`,
                body:newbook
            }),
            invalidatesTags:["Books"]
        }),
        updateBook: builder.mutation({
            query: ({id,...rest}) =>({
                url:`/edit/${id}`,
                method:`PUT`,
                body:rest,
                headers:{
                    'Content-type':'application/json'
                }
            }),
            invalidatesTags:["Books"]
        }),
        deleteBook : builder.mutation({
            query:(id)=>({
                url:`/delete/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:['Books']
        })
    })
})

export const {useFetchAllBooksQuery , useFetchBookByIdQuery, useDeleteBookMutation ,useAddBookMutation ,useUpdateBookMutation} = bookApi
export default bookApi
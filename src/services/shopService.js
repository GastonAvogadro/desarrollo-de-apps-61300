import { base_url } from "../firebase/database";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const shopApi = createApi({
    reducerPath: "shopApi" ,
    baseQuery: fetchBaseQuery({ baseUrl: base_url}),
    endpoints: (builder) => ({
        // getProducts: builder.query({
        //     query: () => 'products.json'
        // }),
        getProductsByCategory: builder.query({
            query: (category) => `products.json?orderBy="category"&equalTo="${category}"`
        }),
        getCategories: builder.query({
            query: () => 'categories.json'
        }),
    }
    )
})

export const { useGetProductsByCategoryQuery, useGetCategoriesQuery } = shopApi
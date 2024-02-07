import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { GetKpisResponse, GetProductResponse } from "./types";

export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: import.meta.env.VITE_BASE_URL}),
    reducerPath: 'main',
    tagTypes: ["Kpis", "Products"],
    endpoints: (build)=>({
        getKpis: build.query<Array<GetKpisResponse>, void>({
            query: ()=> "kpi/kpis/",
            providesTags: ["Kpis"],
            // invalidateTags: ["products"]
        }),
        getProducts: build.query<Array<GetProductResponse>, void>({
            query: ()=> "product/products/",
            providesTags: ["Products"]
        }),
        // deleteProduct: 
        //     invalidateTags: ["Products"]
    })
})

export const {useGetKpisQuery, useGetProductsQuery}= api;
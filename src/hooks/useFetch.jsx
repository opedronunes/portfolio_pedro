'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

/*const api = axios.create({
    baseURL: ''
  })*/

export function useFetch(url) {

    const [data, setData] = useState(null)
    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
    axios.get(url)
        .then(response => {
            setData(response.data);
        })
        .finally(() => {
            setIsFetching(false);
        })
    }, [])

    return { data, isFetching }
};
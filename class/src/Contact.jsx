// import React from 'react'

import {  useQuery } from "react-query"
import { useAppStore } from "./store"
import axios from 'axios'



function Contact() {
  const {count, increase} = useAppStore()
  // const queryclient = useQueryClient()

  const getResults = async () => {
    const results = await axios.get('https://catfact.ninja/fact/')
    return results.data;
    // const res = await fetch('https://www.boredapi.com/api/')
    // return res.json()
  };

  const {data, refetch: refetchCat} = useQuery('activity', getResults)

  // const {} = useQuery(
  //   ['https://www.boredapi.com/api/'],
  //   () => makeGetRequest({'https://www.boredapi.com/api/', }),
  //   onSuccess: (res) => {
  //     refetchCat()
  //   },
  //   onError: (err) => {
  //   }
  // )

  console.log('data', data, refetchCat());

  return (

      <div>Contact
      <p onClick={increase}>{count}</p>
      <button onClick={increase}>Hi</button>
      <p>{data?.fact}</p>
    </div>

    
  )
}

export default Contact
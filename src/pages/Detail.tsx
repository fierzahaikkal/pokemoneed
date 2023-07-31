import React from 'react'
import Header from '../components/Header'
import axios from 'axios'

export const Detail = () => {

    const getDetail = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/1/').then((res) =>{
            console.log(res);
            
        }).catch((err) =>{
            console.log(err);
            
        })
    }
  return (
    <div>
        <Header />
          <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={getDetail}>
        Get Data
      </button>
</div>
  )
}

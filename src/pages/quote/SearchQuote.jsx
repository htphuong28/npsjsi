import React, { useEffect, useState } from 'react'
import axios from 'axios'

const SearchQuote = () => {
    const [inputValue, setInputValue] = useState('Einstein')
    const [searchResult, setSearchResult] = useState([])

    const search_URL = `https://api.quotable.io/search/authors?query=${inputValue}`

    const fetchQ = async() => {
        const res = await axios.get(search_URL)
        console.log(res)
    }

useEffect(
    ()=>{
        setTimeout(() => {
            fetchQ()
        }, 1000);
    }, [inputValue]


)




  return (
    <div>
        <input 
        value={inputValue}
        type="text" placeholder='Enter author name ' 
        onChange={(e)=>setInputValue(e.target.value)}/>
    </div>
  )
}

export default SearchQuote
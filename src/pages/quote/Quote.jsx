import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Quote = () => {
    const [page, setPage] = useState(1)

    const [listQuotes, setListQuotes] = useState([])
    const Quote_URL = `https://api.quotable.io/quotes?page=${page}`

    const fetchQuote = async() => {
        const quoteResponse = await axios.get(Quote_URL)
        const {data} = quoteResponse
        // console.log(data)
        setListQuotes(data?.results)
    }

    useEffect(
        ()=>{
            fetchQuote()
        },[page]

    )

        console.log(listQuotes)

  return (
    <div>
        <div className='h-[200px]'>
            {
                listQuotes.map(
                    (item,index)=>{
                        return(
                            <div>
                                <h1>{item.author}</h1>
                                <p>{item.content}</p>
                            </div>
                        )
                    }
                )
            }
        </div>
        <div className='absolute bottom-0 right-0'>
            <button onClick={()=>setPage(1)}
            className='w-[30px] h-[30px]'>1</button>
            <button onClick={()=>setPage(2)}
            className='w-[30px] h-[30px]'>2</button>
            <button onClick={()=>setPage(3)}
            className='w-[30px] h-[30px]'>3</button>

        </div>
    </div>
  )
}

export default Quote
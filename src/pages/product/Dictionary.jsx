import React from 'react'
import axios from 'axios'

const Dictionary = () => {
    const URL='https://qipedc.moet.gov.vn/dictionary/getAll'

    const getTerms = async() => {
      const result = await axios.get(URL)
      console.log(result, "ket qua get api")
    }

    getTerms()
  return (
    <div>
        
    </div>
  )
}

export default Dictionary
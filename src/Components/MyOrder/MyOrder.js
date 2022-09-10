import React, { useEffect } from 'react'
import axios from '../../config/axiosConfig'

const MyOrder = () => {

    useEffect(() => {
      axios.get('/app/booking')
      .then(()=>{
        
      })
    }, [])
    

  return (
    <div>

    </div>
  )
}

export default MyOrder
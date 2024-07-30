import React from 'react'
import axios from 'axios'

async function GetCalendar({token}) {
    try{
        const response = await axios.get(`http://116.121.184.161:9001/diary/read`,{
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        return response.data
    }
    catch(error){
        return new Error(error)
    }
}

export default GetCalendar
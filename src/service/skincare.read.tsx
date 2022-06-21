import axios from 'axios'
import { useState, useEffect } from 'react'
import { Dayjs } from 'dayjs'

export default function RetrieveSkincareData(currentDateTime: Dayjs) {
  const [initialState, setInitialState] = useState([])

  useEffect(() => {
    const requestOptions = {
      datetime: currentDateTime.format('dddd, DD-MMMM-YYYY HH:mm:ss Z')
    }

    axios.post('/skincare/read', requestOptions)
    .then(function (response) {
      setInitialState(response.data.result)
    })
  }, [])

  return initialState
}
import { useEffect, useState } from "react";
import { Service, IChart } from './Types'

const GetChart = () => {
    const [results, setResults] = useState<Service<IChart>>({
      status: 'loading'
    })
  
    useEffect(() => {
      fetch('https://cors-anywhere.herokuapp.com/http://api.deezer.com/chart&limit=5')
        .then(response => response.json())
        .then(response => {
          setResults({ status: 'loaded', payload: response})
          //console.log(response)
        })
        .catch(error => setResults({ status: 'error', error }))
    }, [])
    return results
  }

  export default GetChart
import { useEffect, useState } from 'react'
import axios from 'axios'


const useFetch = ({endpoint, args}) => {
    const [isLoading , setIsLoading] = useState(false);
    const [isError , setIsError] = useState(false);
    const [data, setData] = useState([]);
    // console.log(endpoint, args)
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
          'X-RapidAPI-Key': "f1f62abb3cmshf1424403a0d0223p1c097fjsn0e332b36f518",
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...args},
      };
      // console.log(options.url, options.params)
      const fetchData = async () => {
        setIsLoading(true);
        try{
            const res = await axios.request(options);
            // console.log( res.data);
            setData(res.data.data);
            setIsLoading(false);

        }catch(err){
            setIsError(err.message);
            alert(err);
        }finally {
            setIsLoading(false);
        }
      }

      useEffect(() => {
        // const clear = setTimeout(() => {},4000)
        fetchData();
        // clearTimeout(clear);
      }, [])

      const refetch = () => {
        setIsLoading(true);
        fetchData();
      }

      return{ data, isLoading, error: isError, refetch };

}


export default useFetch
import {useState,useEffect} from 'react';
 
const useFetch = (url) =>{
    const [data,setdata] = useState(null);
    const [isPending,setPending] = useState(true);
    const [error,setError] = useState(null);
 
    useEffect(() => {
      setTimeout(()=>{
        fetch(url)
        .then(res =>{
          if(!res.ok){
            throw Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then(data => {
          setPending(false);
          setdata(data);
        })
        .catch(error =>{
          setPending(false);
          setError(error.message);
        })
      },1000)
     
    },[url])
 
    return {data,isPending,error};
}
 
export default useFetch;
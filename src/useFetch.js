import { useState,useEffect } from "react";

const useFetch = (url)=>{
    const [data,setData] = useState(null);
    const [isPending,setPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();
        fetch(url,{ signal:abortCont.signal })
        .then(res=>{
            if(!res.ok){
                throw Error("could not connect to database server");
            }
            return res.json();
        })
        .then(data=>{
            setData(data);
            setPending(false);
            setError(null);
        })
        .catch(err=>{
            if(err.name === "AbortError"){
                console.log('fetch aborted')
            }else{
            setPending(false);
            setError(err.message);
            }
        })
    },[url])


    return {data,isPending,error}
}

export default useFetch;
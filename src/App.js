import React from 'react'
import './App.css';
import Card from './Card'
import axios from "axios"
import {useEffect ,useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
//import d from './data.json'
const App=()=>{
  const [data,setData]=useState([])
const [count,setCount]=useState()
const [isloading , setIsLoading]=useState(false)
const [page,setPage]=useState(1)
const [error,setError]=useState(null)
const [hasMore,setHasMore]=useState(true)
let n=count/10
let c=count%10
console.log(page)
const Fetchdata=async()=>{
    //console.log("Hi")
    if(page>n && (page===(n+1) && c===0)){
      setHasMore(false)
    }
  setIsLoading(true)
  setError(null)
  try{
    await axios.get(`https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${page}&page_size=10`).then(
      res=>{
         console.log(res.data.count)      
      setData(prevData=>[...prevData, ...res.data.results])
      setPage(prevPage => prevPage + 1);
     }).catch(err=>{
      console.log(error)
     })
  }

  catch(error){
setError(error)
  }
  finally{
    setIsLoading(false)
  }
 


}
  useEffect(()=>{Fetchdata()},[])
  return (
    <>

      <div className='box-con'>
    <InfiniteScroll dataLength={data.length} next={Fetchdata} hasMore={hasMore} loader={<p>Loading...</p>} endMessage={<p>No more data</p>}>
    <Card data={data}/>
    </InfiniteScroll>
    </div>
    </>
     
    
  );
}

export default App;

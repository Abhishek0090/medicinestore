import React ,{useContext,useState,useEffect} from 'react'
import Medicines from './Medicines'
import '../App.css';
import { useDispatch ,useSelector } from 'react-redux';
import SlickDemo1 from './Carousel/SlickDemo1';

const Home = () => {
  // const [med,setMed] = useState({})
  // useEffect(async()=>{
  //   const data = await fetch("http://localhost:3001/api/meds",(req,res)=>{
  //       const [info] = res.json();
  //       setMed(info);
  //       console.log(info)
  //   })
  //   data();
  // },[fetch])
  // const { item } = useContext(MedicineContext);
 const item = useSelector(state => state.getProducts.item)
    return (
      <>
        <SlickDemo1/>
        <div className='App'>
          <div className='itemalign'>
          {
            item.map((item)=>{
              return <Medicines key={item.id} {...item} />   
            })
          }
          </div>
        </div>
      </>
    )
}

export default Home

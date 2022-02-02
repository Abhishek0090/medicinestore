import React ,{useContext,useState} from 'react'
import Medicines from './Medicines'
import '../App.css';
import SlickDemo from "../components/Carousel/SlickDemo";
import { useDispatch ,useSelector } from 'react-redux';
import SlickDemo1 from './Carousel/SlickDemo1';

const Home = () => {

  // const { item } = useContext(MedicineContext);
 const item = useSelector(state => state.Reducers.item)
 const dispatch = useDispatch()
    return (
      <>
        <SlickDemo1/>
        <div className='App'>
          <div className='d-flex itemalign'>
          {
            item.slice(0, 10).map((ite)=>{
              return <Medicines key={ite.id} {...ite} />   
            })

          }
          </div>
        </div>
      </>
    )
}

export default Home

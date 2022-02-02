import React, { Component } from 'react'  
import "slick-carousel/slick/slick.css";  
import "slick-carousel/slick/slick-theme.css";  
import Slider from "react-slick";  
import './slickdemo.css';  

export class SlickDemo extends Component {  
    render() {  
        var settings = {  
          dots: false,  
          infinite: true,  
          speed: 500,  
          centerMode: true,  
          slidesToShow: 1,  
          slidesToScroll: 1  
          };  
          
          return (  
            <div>  
            <div className='container' >        
            <div className="row title" style={{marginBottom: "1px"}} >             
            </div>    
            </div>  
            <Slider {...settings} >  
              <div className="wdt">  
              <img  className="img" src= {'assets/w.png'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img style={{"height":"40px"}}   src= {'assets/w2.png'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'assets/w1.jpg'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'assets/w4.jpg'} className="img"/>  
              </div >  
              <div className="wdt">  
              <img  className="img" src= {'assets/w5.png'} className="img"/>  
              </div>  
              <div className="wdt">  
              <img  className="img" src= {'assets/w6.png'} className="img"/>  
              </div>  
            </Slider>  
            </div>  
          );  
        }  
      }  
  
export default SlickDemo 
import React from "react";
import "./slickdemo.css";

function App() {
  const data = 
        "https://media-exp1.licdn.com/dms/image/C4E1BAQFs9SmQ9t3Fog/company-background_10000/0/1604587037121?e=2159024400&v=beta&t=TaabYfn5s4ZnzjaCaNSZhNyUYEDwSmUmhoaONG7v4_0"

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  // const slideNumberStyle = {
  //   fontSize: '20px',
  //   fontWeight: 'bold',
  // }
  return (
    <div className="App">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 carouselimg" src={data} alt="First slide" />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
        </a>
      </div>
    </div>
  );
}

export default App;

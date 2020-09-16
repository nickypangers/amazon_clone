import React from "react";
import "./Home.css";
import Product from "./Product";
import { v4 as uuidv4 } from "uuid";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_2x._CB432458382_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id={uuidv4()}
            title="RUNMUS Stereo Gaming Headset for PS4, Xbox One, Nintendo Switch, PC, PS3, Mac, Laptop, Over Ear Headphones PS4 Headset Xbox One Headset with Surround Sound, LED Light & Noise Canceling Microphone"
            price={31.64}
            image="https://images-na.ssl-images-amazon.com/images/I/81PtEw326aL._AC_SX679_.jpg"
            rating={3}
          />
          <Product
            id={uuidv4()}
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id={uuidv4()}
            title="Garmin Forerunner 235, GPS Running Watch, Black/Gray"
            price={159.99}
            image="https://images-na.ssl-images-amazon.com/images/I/819WMWm6NoL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id={uuidv4()}
            title="Posture Corrector For Men And Women - Adjustable Upper Back Brace"
            price={24.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71%2Bh3sktVmL._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id={uuidv4()}
            title="BOTTLED JOY 1 Gallon Water Bottle, BPA Free Large Water Bottle Hydration with Motivational Time Marker"
            price={16.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51ycFQi-ECL._AC_SL1000_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={uuidv4()}
            title='SAMSUNG QN32Q50RAFXZA Flat 32" QLED 4K 32Q50 Series Smart TV'
            price={497.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;

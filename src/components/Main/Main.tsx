import React from 'react';
import './styles/main.css';
import Header from '../Header/Header';
import pic from './pics/pic32.svg';
import pic31 from './pics/pic31.svg';
import pic33 from './pics/pic33.svg';
import pic34 from './pics/pic34.svg';
import MySlider from '../Swiper/Slider';
import Footer from '../Footer/Footer';

function Main(): JSX.Element {
  return (
    <>
      <div className="main">
        <Header />
        <div className="zone-div">
          <div className="header-title">UT ALIQUIP EX EA COMMODO CONSEQUAT</div>
          <div className="firstdiv">
            <div className="div32">
              <img alt="..." src={pic} className="picture32" />
              <p className="p32">
                <h2 className="h2-div32">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h2>
                <h3 className="h3-div32">
                  Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum
                </h3>
              </p>
            </div>
            <div className="div31">
              <p className="p31">
                <h2 className="h2-div31">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </h2>
                <h3 className="h3-div31">
                  Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum
                </h3>
              </p>
              <img alt="..." src={pic31} className="picture31" />
            </div>
          </div>
        </div>
        <div className="content-swiper-div">
          <h2 className="swiper-header">LOREM IPSUM DOLOR SIT AMET</h2>
          <MySlider />
        </div>
        <div className="after-slider-div">
          <header className="after-slider-header">
            UT ALIQUIP EX EA COMMODO CONSEQUAT
          </header>
          <div className="block33-div">
            <div className="div33">
              <img alt="..." src={pic33} className="image33" />
              <h2 className="head33">
                <p className="h233">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <p className="h333">
                  Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum
                </p>
              </h2>
            </div>
            <div className="div34">
              <h2 className="head34">
                <p className="heading34">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
                <p className="headingtwo-34">
                  Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                  veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non
                  proident, sunt in culpa qui officia deserunt mollit anim id
                  est laborum
                </p>
              </h2>
              <img alt="..." src={pic34} className="image34" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Main;

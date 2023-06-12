import React from 'react';
import './style.css';
import productsData from './products.json';
import Carousel from './Carousel';
import Logo from "./img/logo/logo.png";

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="title">BELEZA</h1>
        <img src={Logo} alt="Logo" className="logo" />
        <p className="description">As lojas Propz agora possuem um espaço beleza onde você
          encontra tudo para montar looks únicos
          venha conhecer!
        </p>
      </header>

      <section>

        <div className="carousel-section">
          <Carousel products={productsData} />
        </div>

        <div className="stores-section">
          <hr className="separator" />
          <h2>Lojas Propz</h2>
          <hr className="separator2" />

          <div className='desktop'>
            <ul className="city-names">
              <li>Belo Horizonte</li>
              <li>Campinas</li>
              <li>São Paulo</li>
              <li>Rio de Janeiro</li>
            </ul>
          </div>

          <img src={Logo} alt="Logo" className="logo" />
        </div>




        <div className="stores-section2">
          <div className='border-mobile'>
            <h2>Lojas Propz</h2>
            <hr className="separator2" />


            <ul className="mobile">
              <li>Belo Horizonte</li>
              <li>Campinas</li>
              <li>São Paulo</li>
              <li>Rio de Janeiro</li>
            </ul>
          </div>

          <img src={Logo} alt="Logo" className="logo" />
        </div>

        <div className="footer-text">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel nibh
            interdum, lacinia neque vitae, facilisis nisi. Vestibulum aliquam risus vitae finibus maximus. In fermentum,
            lacus bibendum tempor posuere, dui erat laoreet urna, dictum cursus erat nisi eu tellus. Quisque sit amet sagittis
            purus. Mauris id nunc libero. Ut nisi lorem, cursus eu lacinia at, efficitur quis velit. Sed porta ante eu risus
            euismod maximus. Cras sed tortor scelerisque, feugiat nisl vitae, condimentum purus. Curabitur sem eros, iaculis
            vel ornare et, elementum et nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Suspendisse congue rutrum nisi in consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel nibh
            interdum, lacinia neque vitae, facilisis nisi. Vestibulum aliquam risus vitae finibus maximus. In fermentum,
            lacus bibendum tempor posuere, dui erat laoreet urna, dictum cursus erat nisi eu tellus. Quisque sit amet sagittis
            purus. Mauris id nunc libero. Ut nisi lorem, cursus eu lacinia at, efficitur quis velit. Sed porta ante eu risus
            euismod maximus. Cras sed tortor scelerisque, feugiat nisl vitae, condimentum purus. Curabitur sem eros, iaculis
            vel ornare et, elementum et nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Suspendisse congue rutrum nisi in consequat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel nibh
            interdum, lacinia neque vitae, facilisis nisi. Vestibulum aliquam risus vitae finibus maximus. In fermentum,
            lacus bibendum tempor posuere, dui erat laoreet urna, dictum cursus erat nisi eu tellus. Quisque sit amet sagittis
            purus. Mauris id nunc libero. Ut nisi lorem, cursus eu lacinia at, efficitur quis velit. Sed porta ante eu risus
            euismod maximus. Cras sed tortor scelerisque, feugiat nisl vitae, condimentum purus. Curabitur sem eros, iaculis
            vel ornare et, elementum et nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Suspendisse congue rutrum nisi in consequat.
          </p>
        </div>

      </section>
    </div>
  );
}

export default App;
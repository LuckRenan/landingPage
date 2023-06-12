import React, { useState } from 'react';
import setaLeft from "./img/setas/seta-left.svg";
import setaRight from "./img/setas/seta-right.svg";
import cartao from "./img/cartao/cartao.svg";
import "./Carousel.css";

const Carousel = ({ products }) => {
    const [currentItem, setCurrentItem] = useState(0);

    const handlePrevious = () => {
        setCurrentItem((prevItem) => (prevItem === 0 ? products.length - 1 : prevItem - 1));
    };

    const handleNext = () => {
        setCurrentItem((prevItem) => (prevItem === products.length - 1 ? 0 : prevItem + 1));
    };

    const priceAtSight = (parseFloat(products[currentItem].price.replace(',', '.')) * 10).toFixed(2); // Calcula o valor à vista

    return (
        <div className="carousel">
            <img src={setaLeft} alt="Seta esquerda" className="carousel-button" onClick={handlePrevious} />

            <div className="carousel-item carousel-transition">
                <a href={products[currentItem].link} target="_blank" rel="noopener noreferrer">
                    <img src={products[currentItem].image} alt={products[currentItem].name} />
                    <h2>{products[currentItem].name}</h2>
                    <hr className="separator3" />
                    <div className="prices">
                        <p>10X<sup><span>R$</span></sup>{products[currentItem].price.split(',')[0]}<sup className="subPrice">{products[currentItem].price.split(',')[1]}</sup> </p>
                        <img src={cartao} alt="Cartão" />
                    </div>
                    <div className="oferta">
                        <p>sem juros</p>
                        <p>ou R${priceAtSight} à vista</p> {/* Mostra o valor à vista calculado */}
                    </div>
                    <div className="prices">
                        <p>15X<sup><span>R$</span></sup>{products[currentItem].price2.split(',')[0]}<sup className="subPrice">{products[currentItem].price2.split(',')[1]}</sup> </p>
                    </div>
                    <div className="oferta">
                        <p>com juros</p>
                    </div>
                    <hr className="separator3" />
                </a>
            </div>
            <img src={setaRight} alt="Seta direita" className="carousel-button" onClick={handleNext} />

        </div>
    );
};

export default Carousel;
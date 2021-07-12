import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header-layout">
      <div className="sec-heading light mx-auto">
        <h2>Trasteos - Acarreos Manizales</h2>
        <a
          className="animate__animated animate__backInDown partner-info phone-contact "
          href="http://wa.me/+573215524272?text=Hola, buen día! Estoy pendiente de realizar un trasteo y quisiera recibir más información. Gracias"
          target="_blank"
          rel="noreferrer"
        >
          321 552 4272
        </a>
      </div>
    </div>
  );
};

export default Header;

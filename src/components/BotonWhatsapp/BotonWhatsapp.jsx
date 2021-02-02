import React from 'react';
import './botonwhatsapp.css';

const BotonWhatsapp = () => {
  return (
    <a
      title="Contactarme por whatsapp"
      className="btn-whatsapp"
      href="http://wa.me/+573186234572?text=Hola, buen día! Estoy pendiente de realizar un acarreo y quisiera recibir más información. Gracias"
      target="_blank"
      rel="noreferrer"
    >
      <img
        className="img-whatsapp"
        src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,w_65/v1611715804/trasteosbaratos/whatsapp_h6bj0b.svg"
        alt="icon-whatsapp-contacto"
      />
    </a>
  );
};

export default BotonWhatsapp;

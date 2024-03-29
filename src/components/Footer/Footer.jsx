import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <>
      <footer className="bg-cover skin-dark-footer img-footer-ppal">
        <div className="ht-80"></div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Contacto</h4>
                  <ul className="footer-menu">
                    <li>
                      <a href="http://wa.me/+573215524272" target="_blank" rel="noreferrer">
                        Whatsapp
                      </a>
                    </li>
                    <li>
                      <a href="tel:+573215524272" target="_blank" rel="noreferrer">
                        Llamar
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:williamcastro.mudanzas@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Correo
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Acarreos Manizales</h4>
                  <p>Manizales, Colombia</p>
                  <p>williamcastro.mudanza@gmail.com</p>
                  <p>+57 321 552 4272</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget">
                  <h4 className="widget-title">Síguenos</h4>
                  <ul className="footer-bottom-social">
                    <li>
                      <a href="https://www.facebook.com/TrasteosMnzl/?ref=pages_you_manage" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                    <a href="https://www.instagram.com/trasteosmanizales" target="_blank" rel="noreferrer">
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 col-md-12 text-center">
                <p className="mb-0">{new Date().getFullYear()}</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

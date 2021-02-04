import React from 'react';
import camionAcarreos from '../../assets/images/camionacarreos.jpeg';
import trasteosBox from '../../assets/images/trasteos-box.jpg';

const PrincipalesServicios = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="sec-heading mx-auto">
                <h2 className="animate__animated animate__backInRight">
                  Principales servicios
                </h2>
                <p>
                  Nos caracterizamos por ser los mejores realizando labores de
                  trasteos y acarreos, contamos con muchísimos años de
                  experiencia, acá te contamos un poco de lo que más hacemos en
                  nuestro día a día.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 mb-4">
              <div
                className="features features-center style-1"
                data-aos="fade-down"
                data-aos-duration="1200"
              >
                <img
                  src={trasteosBox}
                  className="img-responsive"
                  alt="icon-trasteos"
                />
                <h4>Trasteos</h4>
                <p>
                  Llevamos y traemos cada una de tus pertenencias con el máximo cuidado posible, sabiendo lo importante que son para ti
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-4">
              <div
                className="features features-center style-1"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <img
                  src="https://res.cloudinary.com/dupegtamn/image/upload/c_scale,h_350,w_350/v1611713156/trasteosbaratos/camion-cajas_rho68o.jpg"
                  className="img-responsive"
                  alt="icon-acarreos"
                />
                <h4>Acarreos</h4>
                <p>
                  Realizamos todo tipo de acarreos, contando con vehículos de
                  todas las capacidades, lo cual permite cuidar y brindar
                  seguridad con cada elemento que transportamos.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 mb-4">
              <div
                className="features features-center style-1"
                data-aos="fade-down"
                data-aos-duration="1200"
              >
                <img
                  src={camionAcarreos}
                  className="img-responsive"
                  alt="icon-transporte"
                />
                <h4>Transporte de elementos</h4>
                <p>
                  Sabemos que deseas cuidar tus elementos por eso contamos con
                  un equipo que recoge y entrega todos tus elementos de forma
                  segura y cuidadosa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
};

export default PrincipalesServicios;

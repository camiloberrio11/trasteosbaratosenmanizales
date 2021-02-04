import React from 'react';
import LockIcon from '../../assets/images/candado.png'
import CamionIcon from '../../assets/images/camion.png'
import BoxIcon from '../../assets/images/box.png'
import WatchIcon from '../../assets/images/watch.png'
import TimeIcon from '../../assets/images/time.png'
import CheckIcon from '../../assets/images/check.png'

const ListadoServicios = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="sec-heading mx-auto">
                <h2>Beneficios</h2>
                <p>
                  Acá te contaremos algunos de los beneficios que obtendrás al
                  contratar tu trasteo o acarreo con nosotros:
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div
                className="large-features-2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="large-features-2-item">
                  <div className="large-features-2-icon">
                    <img
                      src={LockIcon}
                      alt="icon-seguros"
                    />
                  </div>
                  <div className="large-features-2-content">
                    <h4>Tus elementos seguros</h4>
                    <p>
                      Somos cuidadosos con cada uno de los elementos, entendemos
                      que quieres que viajen lo mejor posible, por eso nos
                      encargamos de cuidarlos y protegerlos
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div
                className="large-features-2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="large-features-2-item">
                  <div className="large-features-2-icon">
                    <img
                      src={CamionIcon}
                      alt="icon-modernos"
                    />
                  </div>
                  <div className="large-features-2-content">
                    <h4>Vehículos modernos</h4>
                    <p>
                      Contamos con una flota de vehículos modernos, los cuales
                      brindan el servicio de la mejor manera
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div
                className="large-features-2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="large-features-2-item">
                  <div className="large-features-2-icon">
                    <img
                      src={BoxIcon}
                      alt="icon-espacio-vehiculos"
                    />
                  </div>
                  <div className="large-features-2-content">
                    <h4>Vehículos con espacio apropiado</h4>
                    <p>
                      Nuestra gran flota de vehículos posee un espacio ideal
                      para tus trasteos y acarreos, cuidando de tus cosas y
                      protegiendolas de accidentes
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div
                className="large-features-2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="large-features-2-item">
                  <div className="large-features-2-icon">
                    <img
                      src={WatchIcon}
                      alt="icon-disponibilidad"
                    />
                  </div>
                  <div className="large-features-2-content">
                    <h4>Disponibilidad</h4>
                    <p>
                      Nuestro servicio permite que lo solicites en cualquier
                      momento y con gusto te atenderemos en el menor tiempo
                      posible
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div
                className="large-features-2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="large-features-2-item">
                  <div className="large-features-2-icon">
                    <img
                      src={TimeIcon}
                      alt="icon-flexibilidad"
                    />
                  </div>
                  <div className="large-features-2-content">
                    <h4>Flexibilidad</h4>
                    <p>
                      Somos flexibles en cuanto a recogida y llevada en los
                      destinos que lo requieras.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-6">
              <div
                className="large-features-2"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="large-features-2-item">
                  <div className="large-features-2-icon">
                    <img
                      src={CheckIcon}
                      alt="icon-seguridad"
                    />
                  </div>
                  <div className="large-features-2-content">
                    <h4>Seguridad</h4>
                    <p>
                      Nuestro grupo de personas y colaboradores es totalmente
                      confiable, contamos con ellos hace muchisimos años
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="clearfix"></div>
    </>
  );
};

export default ListadoServicios;

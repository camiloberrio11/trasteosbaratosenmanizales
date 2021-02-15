import BannerContacto from './components/BannerContacto/BannerContacto';
import BotonWhatsapp from './components/BotonWhatsapp/BotonWhatsapp';
import { Helmet } from 'react-helmet';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ListadoServicios from './components/ListadoServicios/ListadoServicios';
import PrincipalesServicios from './components/PrincipalesServicios/PrincipalesServicios';

function App() {
  return (
    <div id="main-wrapper">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Trasteos Manizales | Mudanzas | Sitio Web</title>
        <link rel="preload" />
        <meta
          name="description"
          content="Trasteos, mudanzas, acarreos baratos y economicos en Manizales, Todo tipo de encomiendas y traslado de elementos. Contacto: 318 623 4572"
        />
        <meta
          name="description"
          content="Pagina de trasteos en manizales, baratos y economicos"
        />
        <link rel="canonical" href="https://trasteosenmanizales.com/" />
      </Helmet>
      <Header />
      <BotonWhatsapp />
      <ListadoServicios />
      <BannerContacto />
      <PrincipalesServicios />
      <Footer />
    </div>
  );
}

export default App;

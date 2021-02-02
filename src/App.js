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
        <title>Trasteos Manizales | Sitio web</title>
        <link rel="preload" />
        <meta
          name="description"
          content="this page is trasteos manizales and trasteos manizales, economicos, baratos en manizales"
        />
        <link rel="canonical" href="https://trasteosenmanizales.netlify.app" />
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

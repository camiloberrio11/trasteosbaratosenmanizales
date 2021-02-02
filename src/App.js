import BannerContacto from './components/BannerContacto/BannerContacto';
import BotonWhatsapp from './components/BotonWhatsapp/BotonWhatsapp';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ListadoServicios from './components/ListadoServicios/ListadoServicios';

function App() {
  return (
    <div id="main-wrapper">
      <Header />
      <BotonWhatsapp />
      <ListadoServicios />
      <BannerContacto />
      <Footer />
    </div>
  );
}

export default App;

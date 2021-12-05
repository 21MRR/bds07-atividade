import { ReactComponent as MainImage } from 'assets/image/car-header.svg';
import ButtonIcon from 'components/ButtonIcon';
import Navbar from 'components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-container">
            <MainImage />
            <h1>O carro perfeito para você</h1>
          </div>
          <div className="home-infor-container">
            <h1>
              Conheça nossos carros e de mais um passo na direção do seu sonho
            </h1>
          </div>
        </div>
        <div className="home-button-container">
          <ButtonIcon />
          <div className="home-navegue-container">
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

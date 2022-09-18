import Navbar from 'components/Navbar';
import { ReactComponent as MainImage } from 'assets/images/main-image.svg'
import './styles.scss'
import ButttonIcon from 'components/ButtonIcon';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
            <div>
              <h1>Conheça o melhor catálogo de produtos</h1>

              <p>Ajudaremos você a encontrar os melhores produtos disponívels no mercado</p>

              <Link to="/products">
                <ButttonIcon />
              </Link>
            </div>

          </div>
          <div className="home-image-container">
            <MainImage />
          </div>
        </div>
      </div>
    </>
  );
}
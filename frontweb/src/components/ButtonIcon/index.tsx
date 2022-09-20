import './styles.scss'
import { ReactComponent as ArrowIcon } from 'assets/images/Seta.svg';

export default function ButttonIcon() {
  return (
    <div className="btn-container">
      <button className="btn btn-lg btn-primary btn-icon">
        <h6>INICIE AGORA A SUA BUSCA</h6>
      </button>
      <div className="btn btn-lg btn-icon-container">
        <ArrowIcon />
      </div>
    </div>
  )
}
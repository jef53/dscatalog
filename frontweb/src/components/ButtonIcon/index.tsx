import './styles.scss';
import { ReactComponent as ArrowIcon } from 'assets/images/Seta.svg';

interface ButtonIconProps {
  text: string,
}

export default function ButttonIcon({ text }: ButtonIconProps) {
  return (
    <div className="btn-container">
      <button className="btn btn-lg btn-primary btn-icon">
        <h6>{text}</h6>
      </button>
      <div className="btn btn-lg btn-icon-container">
        <ArrowIcon />
      </div>
    </div>
  )
}
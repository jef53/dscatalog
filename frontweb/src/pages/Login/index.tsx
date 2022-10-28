import './styles.scss'
import { Link } from 'react-router-dom'
import ButttonIcon from 'components/ButtonIcon'
import { ReactComponent as LoginImage } from 'assets/images/login-image.svg'

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-details">
        <div className="login-main-title">
          <h1>LOGIN</h1>
        </div>
        <div className="login-box-container">
          <div className="login-form-container">
            <form>
              <input type="text" id="login" name="login" placeholder="E-mail" />
              <input type="text" id="password" name="password" placeholder="Senha" />
            </form>

          </div>
          <h2 className="">Esqueceu a senha?</h2>
          <div className="login-button-box">
            <ButttonIcon text="FAZER LOGIN" />
          </div>
          <div className="signup-button-box">
            <h3>Não tem cadastro? <span className="handle-signup">CADASTRAR</span></h3>
          </div>
        </div>

      </div>
      <div className="login-container-imageAndInfo">
        <div className='login-contentInfo'><h1>
          Divulgue seus produtos no DS Catalog</h1>
          <p>Faça parte do nosso
            catálogo de divulgação e aumente a venda dos seus produtos.</p>
        </div>
        <div className='login-logo-image'>

          <LoginImage />
        </div>
      </div>
    </div>

  )
}
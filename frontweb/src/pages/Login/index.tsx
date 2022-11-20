import './styles.scss'
import ButttonIcon from 'components/ButtonIcon'
import { useForm } from 'react-hook-form';

interface FormData {
  login: string,
  password: string,
}

export default function Login() {



  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    console.log(formData)
  }


  return (
    <div className="login-container">
      <div className="login-details">
        <div className="login-main-title">
          <h1>LOGIN</h1>
        </div>
        <div className="login-box-container">
          <div className="login-form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input type="text" {...register("login")}
                id="login" name="login" placeholder="E-mail" />
              <input type="text" {...register("password")} id="password" name="password" placeholder="Senha" />
              <h2 className="">Esqueceu a senha?</h2>
              <button type="submit" className="login-button-box">
                <ButttonIcon text="FAZER LOGIN" />
              </button>
            </form>

          </div>

          <div className="signup-button-box">
            <h3>Não tem cadastro? <span className="handle-signup">CADASTRAR</span></h3>
          </div>
        </div>

      </div>

    </div>

  )
}
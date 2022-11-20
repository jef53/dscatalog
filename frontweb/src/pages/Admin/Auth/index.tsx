import { ReactComponent as LoginImage } from 'assets/images/login-image.svg'
import Login from 'pages/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import './styles.scss'

export default function Auth() {
  return (
    <div className="login-container-imageAndInfo">
      <div className='login-contentInfo'><h1>
        Divulgue seus produtos no DS Catalog</h1>
        <p>Faça parte do nosso
          catálogo de divulgação e aumente a venda dos seus produtos.</p>
        <div className='login-logo-image'>

          <LoginImage />
        </div>
      </div>


      <div className="auth-form-container">
        <Routes>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>

    </div>
  );
}
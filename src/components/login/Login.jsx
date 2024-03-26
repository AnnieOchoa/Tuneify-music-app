import { useNavigate } from 'react-router';
import Button from '../Button';
import TextInput from '../TextInput';
import { useEffect, useState } from 'react';
import { checkIsEmail } from '../../helpers/checkIsEmail';
import { auth } from '../../firebase/config';
import { signInWithEmailAndPassword as login} from 'firebase/auth';
import Swal from 'sweetalert2';

const Login = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const onChangeHandler = (field, { target: { value } }) => {
    setLoginForm({
      ...loginForm,
      [field]: value,
    });
  };

  const loginHandler = async (auth, email, password) => {
    await login(auth, email, password)
      .then(credential => {
        const {accessToken, email} = credential.user;
        const userData = {accessToken, email}
        window.localStorage.setItem('userData', JSON.stringify(userData))
        navigate('/')
      }).catch(() => {
        Swal.fire({
          title: 'Error',
          text: 'El email o contraseña son incorrectos',
          icon: 'error'
        })
      })
  }

  const onSubmitHanlder = async (e) => {
    e.preventDefault();
    if (!checkIsEmail(loginForm.email)){
     return Swal.fire({
      title: 'Error',
      text: 'Ingresa un email valido',
      icon: 'error'
     })
    }
    await loginHandler(auth, loginForm.email, loginForm.password)
  };

  useEffect(() => {
    document.body.style.marginTop = 0
    document.body.style.marginBottom = 0
  }, [])
  return (
    <main className="main">
      <div className="main-login container">
        <div className="main-login__wrapper">
          <div className="main-login__wrapper__form">
            <div className="main-login__wrapper__logo">
              <img
                src="https://res.cloudinary.com/dy6gbr4oc/image/upload/v1710559292/tuneify/logo-no-background_ffvbdp.png"
                alt="logo"
              />
            </div>

            <div className="main-login__wrapper__heading">
              <h1>
                {' '}
                Bienvenido a <span>Tuneify</span>{' '}
              </h1>
              <p>
                Accede a tu cuenta y escucha tu musica favorita donde quieras y
                cuando quieras.
              </p>
            </div>

            <form className="form">
              <div className="main-form">
                <div className="main-form__username">
                  <TextInput
                    value={loginForm.email}
                    onChange={(e) => onChangeHandler('email', e)}
                    label="Email *"
                    placeholder="Ingresa tu usuario"
                    type="text"
                  />
                </div>

                <div className="main-form__password">
                  <TextInput
                    value={loginForm.password}
                    onChange={(e) => onChangeHandler('password', e)}
                    label="Contraseña *"
                    placeholder="Ingresa tu contraseña"
                    type="password"
                  />
                </div>
              </div>

              <div className="main-form__forgotpassword">
                <a href="#">
                  ¿Olvidaste tu contraseña? <span>¡Recuperala!</span>{' '}
                </a>
              </div>

              <div className="main-form__cta">
                <Button onClick={onSubmitHanlder} name="Iniciar Sesión" />
                <Button
                  name="Registrarse"
                  path="/auth/signup"
                  type="navigation"
                  style="outlined-btn"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;

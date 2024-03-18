import LoginForm from './LoginForm';

const Login = () => {
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

            <LoginForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;

import SingUpForm from './SingUpForm';

const SignUp = () => {
  return (
    <main className="main-page">
      <div className="main-page-signup container">
        <div className="main-page-signup__wrapper">
          <div className="main-page-signup__wrapper__form">
            <div className="main-page-signup__wrapper__logo">
              <img
                src="https://res.cloudinary.com/dy6gbr4oc/image/upload/v1710559292/tuneify/logo-no-background_ffvbdp.png"
                alt="logo"
              />
            </div>

            <div className="main-page-signup__wrapper__heading">
              <h1>
                {' '}
                Bienvenido a <span>Tuneify</span>{' '}
              </h1>
              <p>
                <span>Crea</span> tu cuenta y escucha tu musica favorita donde
                quieras y cuando quieras.
              </p>
            </div>

            <SingUpForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;

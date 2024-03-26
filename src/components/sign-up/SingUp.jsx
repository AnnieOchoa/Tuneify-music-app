import TextInput from '../TextInput';
import Button from '../Button';
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword as createUser } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { checkIsEmail } from '../../helpers/checkIsEmail';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';


//componente sign up 
const SignUp = () => {
  const navigate = useNavigate() //hook de nevegacion
  const [signupForm, setSignupForm] = useState({ //hook para estado de formulario
    user: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChangeHandler = (field, { target: { value } }) => { //destructuring
    setSignupForm({
      ...signupForm,
      [field]: value,
    });
  };

  //funcion autenticacion firebase para crear cuenta
  const createAccount = async (auth, email, password) => {
    if(!checkIsEmail(email)){
      return window.alert('Ingresa un email válido')
    }
    return await createUser(auth, email, password)
      .then(() => {
        setSignupForm({
          user: '',
          email: '',
          password: '',
          confirmPassword: ''
        })
        Swal.fire({
          title: 'Usuario Creado',
          text: 'Tu usuario fue creado correctamente. Seras redirigo a la pagina de inicio de sesión',
          icon: 'success'
        })
        navigate('/auth/login')

      })
      .catch((err) => {
        console.log(err);
      });
  };

  //funcion de submit 'boton'
  const onSubmitHanlder = async (e) => {
    e.preventDefault();
    await createAccount(auth, signupForm.email, signupForm.password)
  };

  //creado para moficar margin top del body cuando se monta el componente
  useEffect(() => {
    document.body.style.marginTop = 0
    document.body.style.marginBottom = 0
  }, [])
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

            <form className="form">
              <div className="main-form">
                <div className="main-form__username">
                  <TextInput
                    value={signupForm.user}
                    onChange={(e) => onChangeHandler('user', e)}
                    label="Usario"
                    placeholder="Ingresa tu usuario"
                    type="text"
                  />
                </div>

                <div className="main-form__email">
                  <TextInput
                    value={signupForm.email}
                    onChange={(e) => onChangeHandler('email', e)}
                    label="Email *"
                    placeholder="Ingresa tu email"
                    type="email"
                  />
                </div>

                <div className="main-form__password">
                  <TextInput
                    value={signupForm.password}
                    onChange={(e) => onChangeHandler('password', e)}
                    label="Contraseña *"
                    placeholder="Ingresa tu contraseña"
                    type="password"
                  />
                </div>

                <div className="main-form__password">
                  <TextInput
                    value={signupForm.confirmPassword}
                    onChange={(e) => onChangeHandler('confirmPassword', e)}
                    label="Confirma tu contraseña *"
                    placeholder="Confirma tu contraseña"
                    type="password"
                  />
                </div>
              </div>

              <div className="main-form__cta">
                <Button
                  onClick={onSubmitHanlder}
                  name="Registrarse"
                  style="outlined-btn"
                />
                <Button
                  path="/auth/login"
                  type="navigation"
                  name="Iniciar Sesión"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignUp;

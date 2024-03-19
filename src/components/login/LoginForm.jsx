import Button from '../Button';
import TextInput from '../TextInput';

const LoginForm = () => {
  return (
    <form className="form">
      <div className="main-form">
        <div className="main-form__username">
          <TextInput
            label="Usario"
            placeholder="Ingresa tu usuario"
            type="text"
          />
        </div>

        <div className="main-form__password">
          <TextInput
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            type="password"
          />
        </div>
      </div>

      <div className="main-form__forgotpassword">
              <a href="#">¿Olvidaste tu contraseña? <span>¡Recuperala!</span> </a>
      </div>

      <div className="main-form__cta">
        <Button name="Iniciar Sesión" />
        <Button name="Registrarse" path="/auth/signup" type='navigation' style="outlined-btn" />
      </div>
    </form>
  );
};

export default LoginForm;

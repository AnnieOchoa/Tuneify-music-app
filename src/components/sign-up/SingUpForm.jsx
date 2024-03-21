import Button from '../Button';
import TextInput from '../TextInput';

const SingUpForm = () => {
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

        <div className="main-form__email">
          <TextInput
            label="Email"
            placeholder="Ingresa tu email"
            type="email"
          />
        </div>

        <div className="main-form__password">
          <TextInput
            label="Contraseña"
            placeholder="Ingresa tu contraseña"
            type="password"
          />
        </div>

        <div className="main-form__password">
          <TextInput
            label="Confirma tu contraseña"
            placeholder="Confirma tu contraseña"
            type="password"
          />
        </div>
      </div>

      <div className="main-form__cta">
        <Button name="Registrarse" style="outlined-btn" />
        <Button path="/auth/login" type="navigation" name="Iniciar Sesión" />
      </div>
    </form>
  );
};

export default SingUpForm;

/* eslint-disable react/prop-types */
const TextInput = ({ label, placeholder, value, type, onChange }) => {
  return (
    <div className="regular-textinput">
      <label>{label}</label>
      <input
        autoComplete=""
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default TextInput;

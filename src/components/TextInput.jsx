/* eslint-disable react/prop-types */
const TextInput = ({ label, placeholder, value, type, onchange }) => {
  return (
    <div className="regular-textinput">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        onChange={onchange}
        value={value}
      />
    </div>
  );
};

export default TextInput;

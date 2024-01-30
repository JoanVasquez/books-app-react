export const Input = ({ value, setValue, name, label, type }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      className="input"
      value={value}
      onChange={(event) => setValue(event.target.value)}
    />
  </>
);

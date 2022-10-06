import { useState, Fragment } from "react";
import { useHandleSubmit } from "./useHandleSubmit";
import "./Form.css";

const Form = ({ formSpec: { title, labelTitles, inputFields } }) => {
  const [inputValues, setInputValues] = useState(
    inputFields.reduce((prev, curr) => ({ ...prev, [curr]: "" }), {})
  );

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValues({ ...inputValues, [name]: value });
  };

  let handleFormSubmitHook = useHandleSubmit;
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleFormSubmitHook(title, inputValues);
  };
  return (
    <div className="form-container" onSubmit={handleFormSubmit}>
      <form className="form">
        <h2 className="form__heading">{title}</h2>
        {labelTitles.map((title, idx) => {
          return (
            <Fragment key={idx}>
              <label className="form__label">{title}</label>
              <input
                className="form__input"
                type={inputFields[idx].match(
                  /password/i ? "password" : inputFields[idx]
                )}
                name={inputFields[idx]}
                placeholder={inputFields[idx]}
                autoComplete="on"
                required
                onChange={handleInputChange}
              />
            </Fragment>
          );
        })}
        <button className="btn form__btn">{title}</button>
      </form>
    </div>
  );
};

export default Form;

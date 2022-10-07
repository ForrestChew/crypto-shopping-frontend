import { useState, Fragment } from "react";
import { useHandleSubmit } from "./useHandleSubmit";
import { useNavigate } from "react-router-dom";
import Notification from "../Notification/Notification";
import "./Form.css";

const Form = ({ formSpec: { title, labelTitles, inputFields } }) => {
  const [inputValues, setInputValues] = useState(
    inputFields.reduce((prev, curr) => ({ ...prev, [curr]: "" }), {})
  );
  const [notificationSuccess, setNotificationSuccess] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputValues({ ...inputValues, [name]: value });
  };

  const navigate = useNavigate();

  const { handleClientReq } = useHandleSubmit();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const submitStatus = await handleClientReq(title, inputValues);
    setNotificationSuccess(submitStatus.successStatus.ok);
    setShowNotification(true);
    if (submitStatus.successStatus.ok) {
      const redirectPath = submitStatus.redirectPath;
      navigate(redirectPath);
    }
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
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
        {showNotification && <Notification isError={notificationSuccess} />}
      </form>
    </div>
  );
};

export default Form;

import { useReducer, Fragment } from "react";
import { useHandleSubmit } from "./useHandleSubmit";
import { useNavigate } from "react-router-dom";
import { formReducer } from "./reducers";
import Notification from "../Notification/Notification";
import "./Form.css";

const Form = ({ formSpec: { title, labelTitles, inputFields } }) => {
  const [formState, dispatch] = useReducer(
    formReducer,
    inputFields.reduce((prev, curr) => ({ ...prev, [curr]: "" }), {
      notificationSuccess: false,
      showNotification: false,
    })
  );

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: name,
      payload: value,
    });
  };

  const { handleClientReq } = useHandleSubmit();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { isSuccessfull, redirectPath } = await handleClientReq(
      title,
      formState
    );
    dispatch({
      type: "NOTIFICATION START",
      field: isSuccessfull,
    });
    if (isSuccessfull) {
      navigate(redirectPath);
    }
    setTimeout(() => {
      dispatch({ type: "NOTIFICATION END" });
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
        {formState.showNotification && (
          <Notification isSuccess={formState.notificationSuccess} />
        )}
      </form>
    </div>
  );
};

export default Form;

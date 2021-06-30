import React, { useState, useContext } from "react";
import { UserContext } from "../../../context/user/UserState";
import { post } from "../../../utils/rest";
import MessageList from "../../list/message/MessageList";
import "./ChangePasswordForm.css";

const ChangePasswordForm = () => {
  const { token } = useContext(UserContext);
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordRepeat, setNewPasswordRepeat] = useState("");
  const [errors, setErrors] = useState([]);
  const [success, setSuccess] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    let validation = true;

    setErrors([]);
    setSuccess([]);

    if (newPassword !== newPasswordRepeat) {
      setErrors((prevValue) => [
        ...prevValue,
        "Die angegebenen Passwörter sind nicht gleich",
      ]);
      validation = false;
    }

    if (newPassword.length <= 6 || newPasswordRepeat.length <= 6) {
      setErrors((prevValue) => [
        ...prevValue,
        "Das Passwort sollte mehr als 6 Zeichen haben",
      ]);
      validation = false;
    }

    if (validation) {
      setLoading(true);

      const res = await post("/api/v1/change-password", {
        token: token,
        newPassword,
      });

      if (res.success === true) {
        setSuccess((prevValue) => [
          ...prevValue,
          "Ihr Passwort wurde erfolgreich geändert",
        ]);
      } else {
        setErrors((prevValue) => [...prevValue, res.data]);
      }

      setLoading(false);
    }
  };

  return (
    <>
      {errors.length > 0 ? <MessageList items={errors} type="error" /> : null}
      {success.length > 0 ? (
        <MessageList items={success} type="success" />
      ) : null}
      <form className="password-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="password"
          placeholder="Neues Passwort"
          className="input password-form__input"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Neues Passwort wiederholen"
          style={loading ? { backgroundColor: "#91b2f9" } : null}
          className="input password-form__input"
          value={newPasswordRepeat}
          onChange={(e) => setNewPasswordRepeat(e.target.value)}
        />
        <button
          type="submit"
          style={loading ? { backgroundColor: "#91b2f9" } : null}
          className="password-form__btn btn btn--filled"
        >
          {loading ? "Passwort ändern..." : "Passwort ändern"}
        </button>
      </form>
    </>
  );
};

export default ChangePasswordForm;

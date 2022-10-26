import PopupWithForm from "./PopupWithForm";
import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [avatar, setAvatar] = React.useState("");

  const avatarRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  function handleAvatarChange(e) {
    setAvatar(e.target.value);
  }

  React.useEffect(() => {
    setAvatar(currentUser.avatar);
  }, [currentUser]);

  return (
    <PopupWithForm
      name="avatar"
      title="Cambiar foto de perfil"
      formName="newProfileImg"
      isOpen={isOpen}
      onClose={onClose}
      formSubmitText="Guardar"
      formSubmitClass="form-profile"
      onSubmit={handleSubmit}
    >
      <input
        className="modal__input modal__profile-url"
        id="new-profile-url"
        type="url"
        ref={avatarRef}
        onChange={handleAvatarChange}
        placeholder={avatar}
        required
      />
      <span className="modal__error" id="new-profile-url-error">
        Por favor, rellena este campo.
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

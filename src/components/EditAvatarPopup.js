import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="avatar"
      title="Cambiar foto de perfil"
      formName="newProfileImg"
      isOpen={isOpen}
      onClose={onClose}
      formSubmitText="Guardar"
      formSubmitClass="form-profile"
    >
      <input
        className="modal__input modal__profile-url"
        id="new-profile-url"
        type="url"
        placeholder="Enlace a la imágen"
        required
      />
      <span className="modal__error" id="new-profile-url-error">
        Por favor, rellena este campo.
      </span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

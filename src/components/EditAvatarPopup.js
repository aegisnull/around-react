import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup() {
  return (
    <PopupWithForm
      name="avatar"
      title="Cambiar foto de perfil"
      formName="newProfileImg"
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
      <button className="modal__form-submit modal__form-profile">
        Guardar
      </button>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;

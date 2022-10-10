import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen }) {
  return (
    <PopupWithForm
      name="profile"
      title="Edit profile"
      formName="editProfile"
      isOpen={isOpen}
    >
      <input
        className="modal__input modal__profile-name"
        id="edit-profile-name"
        type="text"
        placeholder="username"
        minlength="2"
        maxlength="40"
        required
      />
      <span className="modal__error" id="edit-profile-name-error">
        Por favor, rellena este campo.
      </span>
      <input
        className="modal__input modal__profile-title"
        id="edit-profile-title"
        type="text"
        placeholder="usertitle"
        minlength="2"
        maxlength="200"
        required
      />
      <span className="modal__error" id="edit-profile-title-error">
        Por favor, rellena este campo.
      </span>
      <button type="submit" className="modal__form-submit modal__profile-edit">
        Guardar
      </button>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

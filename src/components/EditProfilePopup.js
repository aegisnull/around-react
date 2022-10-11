import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="profile"
      title="Edit profile"
      formName="editProfile"
      isOpen={isOpen}
      onClose={onClose}
      formSubmitText="Guardar"
      formSubmitClass="profile-edit"
    >
      <input
        className="modal__input modal__profile-name"
        id="edit-profile-name"
        type="text"
        placeholder="username"
        minLength="2"
        maxLength="40"
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
        minLength="2"
        maxLength="200"
        required
      />
      <span className="modal__error" id="edit-profile-title-error">
        Por favor, rellena este campo.
      </span>
    </PopupWithForm>
  );
}

export default EditProfilePopup;

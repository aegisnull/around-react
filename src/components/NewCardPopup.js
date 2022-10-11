import PopupWithForm from "./PopupWithForm";

function NewCardPopup({ isOpen, onClose }) {
  return (
    <PopupWithForm
      name="post"
      title="Nuevo Lugar"
      formName="newPlace"
      isOpen={isOpen}
      onClose={onClose}
      formSubmitText="Crear"
      formSubmitClass="form-create"
    >
      <input
        className="modal__input modal__profile-cardtitle"
        id="new-place-title"
        type="text"
        placeholder="Título"
        minLength="2"
        maxLength="30"
        required
      />
      <span className="modal__error" id="new-place-title-error">
        Por favor, rellena este campo.
      </span>
      <input
        className="modal__input modal__profile-cardurl"
        id="new-place-url"
        type="url"
        placeholder="Enlace a la imágen"
        required
      />
      <span className="modal__error" id="new-place-url-error">
        Por favor, rellena este campo.
      </span>
    </PopupWithForm>
  );
}

export default NewCardPopup;

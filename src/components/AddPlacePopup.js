import PopupWithForm from "./PopupWithForm";
import React from "react";

function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const nameRef = React.useRef();
  const linkRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    onAddPlaceSubmit({
      name: nameRef.current.value,
      link: linkRef.current.value,
    });
  }

  React.useEffect(() => {
    nameRef.current.value = "";
    linkRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="post"
      title="Nuevo Lugar"
      formName="newPlace"
      isOpen={isOpen}
      onClose={onClose}
      formSubmitText="Crear"
      formSubmitClass="form-create"
      onSubmit={handleSubmit}
    >
      <input
        className="modal__input modal__profile-cardtitle"
        id="new-place-title"
        type="text"
        placeholder="Título"
        minLength="2"
        maxLength="30"
        ref={nameRef}
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
        ref={linkRef}
        required
      />
      <span className="modal__error" id="new-place-url-error">
        Por favor, rellena este campo.
      </span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;

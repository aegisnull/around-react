function PopupWithForm(props) {
  return (
    <div
      className={`modal modal-${props.name} ${
        props.isOpen ? "modal_active" : ""
      }`}
    >
      <div className="modal__container">
        <h2 className="modal__title">{props.title}</h2>
        <form
          className={`modal__form modal__form_${props.name}`}
          name={props.formName}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button
            type="submit"
            className={`modal__form-submit modal__${props.formSubmitClass}`}
            onClick={props.onSubmit}
          >
            {props.formSubmitText}
          </button>
        </form>
        <button className={`modal__close-button modal__close_${props.name}`} />
      </div>
    </div>
  );
}

export default PopupWithForm;

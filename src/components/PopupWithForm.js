function PopupWithForm(props) {
  return (
    <div className={`modal modal-${props.name}`}>
      <div className="modal__container">
        <h2 className="modal__title">{props.title}</h2>
        <form
          className={`modal__form modal__form_${props.name}`}
          name={props.name}
        >
          {props.children}
        </form>
        <button
          className={`modal__close-button modal__close_${props.name}`}
        ></button>
      </div>
    </div>
  );
}

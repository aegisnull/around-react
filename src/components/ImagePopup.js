function ImagePopup({ isOpen, card, onClose }) {
  return (
    <div id="lightbox" className={`popup ${isOpen ? "active" : ""}`}>
      <img className="popup__image" src=" " alt=" " />
      <p className="popup__title"></p>
      <button className="popup__close"></button>
    </div>
  );
}

export default ImagePopup;

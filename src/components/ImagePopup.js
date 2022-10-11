function ImagePopup(props) {
  return (
    <div id="lightbox" className="popup">
      <img className="popup__image" src=" " alt=" " />
      <p className="popup__title"></p>
      <button className="popup__close"></button>
    </div>
  );
}

export default ImagePopup;

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import NewCardPopup from "./NewCardPopup";

function App() {
  return (
    <div className="page__content">
      <Header />
      <Main />
      <Footer />
      <EditProfilePopup />
      <NewCardPopup />

      {/*       <div className="modal modal-post">
        <div className="modal__container">
          <h2 className="modal__title">Nuevo Lugar</h2>
          <form className="modal__form modal__form_place" name="newPlace">
            <input
              className="modal__input modal__profile-cardtitle"
              id="new-place-title"
              type="text"
              placeholder="Título"
              minlength="2"
              maxlength="30"
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
            <button className="modal__form-submit modal__form-create">
              Crear
            </button>
          </form>
          <button className="modal__close-button modal-post__close"></button>
        </div>
      </div>
      <div id="lightbox" className="popup">
        <img className="popup__image" src=" " alt=" " />
        <p className="popup__title"></p>
        <button className="popup__close"></button>
      </div>
      <div className="modal modal-confirmation">
        <div className="modal__container">
          <form
            className="modal__form modal__form_delete"
            name="deleteConfirmation"
          >
            <h2 className="modal__title modal__title_delete">¿Estás seguro?</h2>
            <button className="modal__form-submit modal__form-delete">
              Sí
            </button>
          </form>
          <button className="modal__close-button modal__delete-close"></button>
        </div>
      </div> */}
      {/* <div className="modal modal-profile">
        <div className="modal__container">
          <h2 className="modal__title">Cambiar foto de perfil</h2>
          <form
            className="modal__form modal__form_profile-edit"
            name="newProfileImg"
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
          </form>
          <button className="modal__close-button modal-profile__close"></button>
        </div>
      </div> */}
      <template id="cards">
        <div className="card__container">
          <button className="card__remove-button"></button>
          <img className="card__img" src=" " alt=" " />
          <div className="card__text-container">
            <h2 className="card__title">" "</h2>
            <div className="card__like-container">
              <button className="card__like-button"></button>
              <span className="card__like-counter">1</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;

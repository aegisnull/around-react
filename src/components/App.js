import Header from "./Header";

function App() {
  return (
    <div className="page__content">
      <div className="main__container">
        <Header />
        <section className="profile">
          <div className="profile__container-left">
            <img className="profile__img" src="" alt="Profile picture" />
            <div className="profile__overlay">
              <span className="profile__img-button"></span>
            </div>
          </div>
          <div className="profile__container-middle">
            <div className="profile__subcontainer-top">
              <h1 className="profile__name">Luis</h1>
              <button className="profile__edit-button">
                <img
                  className="profile__edit-icon"
                  src="<%=require('./images/edit.svg')%>"
                  alt="edit button"
                />
              </button>
            </div>
            <div className="profile__subcontainer-bottom">
              <h2 className="profile__title">Front-end</h2>
            </div>
          </div>
          <div className="profile__container-right">
            <button className="profile__post-button">
              <img
                className="profile__post-icon"
                src="<%=require('./images/post.svg')%>"
                alt="post button"
              />
            </button>
          </div>
        </section>
        <section className="cards"></section>

        <section className="footer">
          <h2 className="footer__copyright">© 2021 Alrededor de los EEUU</h2>
        </section>
      </div>
      <div className="modal">
        <div className="modal__container">
          <h2 className="modal__title">Edit profile</h2>
          <form className="modal__form modal__form_profile" name="editProfile">
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
            <button
              type="submit"
              className="modal__form-submit modal__profile-edit"
            >
              Guardar
            </button>
          </form>
          <button className="modal__close-button modal__close"></button>
        </div>
      </div>
      <div className="modal modal-post">
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
      </div>
      <div className="modal modal-profile">
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
      </div>
      <template id="cards">
        <div className="card__container">
          <button className="card__remove-button"></button>
          <img className="card__img" src=" " alt=" " />
          <div className="card__text-container">
            <h2 className="card__title"></h2>
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

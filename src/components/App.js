import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import NewCardPopup from "./NewCardPopup";
import EditAvatarPopup from "./EditAvatarPopup";

function App() {
  function handleEditAvatarClick() {
    document.querySelector(".modal-avatar").classList.add("modal_active");
  }

  function handleEditProfileClick() {
    document.querySelector(".modal-profile").classList.add("modal_active");
  }

  function handleAddPlaceClick() {
    document.querySelector(".modal-post").classList.add("modal_active");
  }

  return (
    <div className="page__content">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
      />
      <Footer />
      <EditProfilePopup />
      <NewCardPopup />
      <EditAvatarPopup />

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

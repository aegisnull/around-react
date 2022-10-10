import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import NewCardPopup from "./NewCardPopup";
import EditAvatarPopup from "./EditAvatarPopup";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  function handleEditAvatarClick() {
    document.querySelector(".modal-avatar").classList.add("modal_active");
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
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
      <EditProfilePopup isOpen={isEditProfilePopupOpen} />
      <NewCardPopup isOpen={isAddPlacePopupOpen} />
      <EditAvatarPopup isOpen={isEditAvatarPopupOpen} />

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

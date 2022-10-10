import edit from "../images/edit.svg";
import post from "../images/post.svg";
import api from "../utils/api";
import React from "react";

function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick }) {
  const [userName, setUserName] = React.useState([]);
  const [userDescription, setUserDescription] = React.useState([]);
  const [userAvatar, setUserAvatar] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log("Error. La solicitud ha fallado");
      });
  }, []);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log("Error. La solicitud ha fallado");
      });
  }, []);

  return (
    <main className="main__container">
      <section className="profile">
        <div className="profile__container-left">
          <img className="profile__img" src={userAvatar} alt="Profile avatar" />
          <div className="profile__overlay">
            <span
              onClick={onEditAvatarClick}
              className="profile__img-button"
            ></span>
          </div>
        </div>
        <div className="profile__container-middle">
          <div className="profile__subcontainer-top">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              onClick={onEditProfileClick}
            >
              <img
                className="profile__edit-icon"
                src={edit}
                alt="edit button"
              />
            </button>
          </div>
          <div className="profile__subcontainer-bottom">
            <h2 className="profile__title">{userDescription}</h2>
          </div>
        </div>
        <div className="profile__container-right">
          <button className="profile__post-button" onClick={onAddPlaceClick}>
            <img className="profile__post-icon" src={post} alt="post button" />
          </button>
        </div>
      </section>
      <section className="cards"></section>
    </main>
  );
}

export default Main;

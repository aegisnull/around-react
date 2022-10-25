import edit from "../images/edit.svg";
import post from "../images/post.svg";
import api from "../utils/api";
import React, { useState, useEffect, useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
}) {
  const [userInfo, setUserInfo] = useState({});
  const [cards, setCards] = React.useState([]);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    setUserInfo({
      name: currentUser.name,
      about: currentUser.about,
      avatar: currentUser.avatar,
    });
  }, [currentUser]);

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

  function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya le han dado like
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    // Envía una petición a la API y obtén los datos actualizados de la tarjeta
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main className="main__container">
      <section className="profile">
        <div className="profile__container-left">
          <img
            className="profile__img"
            src={userInfo.avatar}
            alt="Profile avatar"
          />
          <div className="profile__overlay">
            <span
              onClick={onEditAvatarClick}
              className="profile__img-button"
            ></span>
          </div>
        </div>
        <div className="profile__container-middle">
          <div className="profile__subcontainer-top">
            <h1 className="profile__name">{userInfo.name}</h1>
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
            <h2 className="profile__title">{userInfo.about}</h2>
          </div>
        </div>
        <div className="profile__container-right">
          <button className="profile__post-button" onClick={onAddPlaceClick}>
            <img className="profile__post-icon" src={post} alt="post button" />
          </button>
        </div>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card
            cardData={card}
            onCardClick={onCardClick}
            key={card._id}
            onLikeClick={handleCardLike}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;

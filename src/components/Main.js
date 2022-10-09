import edit from "../images/edit.svg";
import post from "../images/post.svg";

function Main({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick }) {
  return (
    <main className="main__container">
      <section className="profile">
        <div className="profile__container-left">
          <img className="profile__img" src="" alt="Profile avatar" />
          <div className="profile__overlay">
            <span
              onClick={onEditAvatarClick}
              className="profile__img-button"
            ></span>
          </div>
        </div>
        <div className="profile__container-middle">
          <div className="profile__subcontainer-top">
            <h1 className="profile__name">Luis</h1>
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
            <h2 className="profile__title">Front-end</h2>
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

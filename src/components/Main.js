function Main() {
  return (
    <main className="main__container">
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
    </main>
  );
}

export default Main;

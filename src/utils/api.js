class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error ${res.status}`);
  }

  //GET https://around.nomoreparties.co/v1/groupId/users/me
  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log("Error. La solicitud ha fallado");
      });
  }

  //GET https://around.nomoreparties.co/v1/groupId/cards
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._checkResponse)
      .then((data) => {
        return data;
      })
      .catch((err) => {
        console.log("Error. La solicitud ha fallado");
      });
  }
}

const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/cohort-1-es",
  headers: {
    authorization: "e7cf5ec1-f874-45f0-bd41-d890ac5955db",
    "Content-Type": "application/json",
  },
});

export default api;

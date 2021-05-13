import React, { PureComponent } from "react";

export default class AddUsers extends PureComponent {
  onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = [...formData.values()];
    const user = { id: this.props.users[this.props.users.length - 1].id + 1, name: data[0], hobby: data[1], sex: data[2], age: data[3] };
    this.props.handleAddUser(user); 
    event.target.reset();
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className="userForm"
        style={{ width: "450px" }}
      >
        <div className="bodyForm">
            <input className="inputName" placeholder="Введите имя" name="number" />
            <input className="inputName" placeholder="Введите хобби" name="number" />
            <input className="inputName" placeholder="Введите пол" name="number" />
          <div className="textForm">
              <input
                className="inputAge"
                placeholder="Введите возраст"
                name="balance"
              />
              <button type="submit" className="buttonSuccess">
                Добавить пользователя
              </button>
          </div>
        </div>
      </form>
    );
  }
}
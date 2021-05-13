import React, { PureComponent } from "react";

class SearchUsers extends PureComponent {
  onSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = [...formData.values()];
    const name = data[0];
    this.props.handleSearchUser(name);
    event.target.reset();
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className="userForm"
        style={{ width: "450px" }}
      >
        <div className="formSearch">
            <input className="inputSearchName" placeholder="Введите имя" name="number" />
              <button type="submit" className="buttonSearchName">
                Найти пользователя
              </button>
        </div>
      </form>
    );
  }
}

export default SearchUsers;
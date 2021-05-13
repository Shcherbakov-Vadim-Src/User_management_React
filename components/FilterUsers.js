import React, { PureComponent } from "react";

class FilterUsers extends PureComponent {
  
  render() {
    return (
        <div className="formSort">
            <button onClick={() => this.props.handleSortUsersDown()} type="click" className="buttonDown">
                Сортировка ▲
            </button>  
            <button onClick={() => this.props.handleSortUsersUp()} type="click" className="buttonUp">
                Сортировка ▼
            </button>
        </div>
    );
  }
}

export default FilterUsers;
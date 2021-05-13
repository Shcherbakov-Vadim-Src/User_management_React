import React, { PureComponent } from 'react';
import AddUsers from './AddUsers';
import SearchUsers from './SearchUsers';
import FilterUsers from './FilterUsers';

class Users extends PureComponent {
    constructor(props) {
        super(props);
        this.handleSortUsersDown = this.handleSortUsersDown.bind(this);
        this.handleSortUsersUp = this.handleSortUsersUp.bind(this);
    }

    state = {
        users: [
            {
                id: 0,
                name: "Alfons Petrovich",
                hobby: "icecream",
                sex: "male",
                age: 19,
                alive: true
            },
            {
                id: 1,
                name: "Gangrena Kolena",
                hobby: "pain",
                sex: "female",
                age: 25,
                alive: false
            },
            {
                id: 2,
                name: "Molotov Coctail",
                hobby: "bonfires",
                sex: "male",
                age: 27,
                alive: true
            },
            {
                id: 3,
                name: "Gromyko Andrey",
                hobby: "diplomacy",
                sex: "male",
                age: 82,
                alive: false
            },
            {
                id: 4,
                name: "Tereza Mother",
                hobby: "babys",
                sex: "female",
                age: 75,
                alive: false
            },
            {
                id: 5,
                name: "Bereza White",
                hobby: "grow",
                sex: "female",
                age: 32,
                alive: true
            }
        ],
        male: 'male',
        isAll: true
    }

    allhandler = () => {
        this.setState({
            isAll: true
        })
    }

    handleGetMale = () => {
        this.setState({
            male: 'male', isAll: false
        })
    }

    handleGetFemale = () => {
        this.setState({
            male: 'female', isAll: false
        })
    }

    handleDeleteUsers = (id) => {
        const clone = this.state.users.filter((user) => user.id !== id);
        this.setState({ users: clone });
    }

    handleAddUser = (user) => {
        const array = [...this.state.users];
        array.push(user);
        this.setState({ users: array });
    }

    handleSearchUser = (name) => {
        const clone = this.state.users.filter((user) => user.name === name);
        this.setState({ users: clone });
    }

    handleSortUsersDown = () => {
        const array = [...this.state.users];
        const clone = array.sort((a, b) => b.age - a.age);
        this.setState({ users: clone });
    }

    handleSortUsersUp = () => {
        const array = [...this.state.users];
        const clone = array.sort((a, b) => a.age - b.age);
        this.setState({ users: clone });
    }

    render() {

        return (<>
            <div>
                <h1>The list of users</h1>
                <SearchUsers handleSearchUser={this.handleSearchUser} />
                <button className="button buttonAll" onClick={this.allhandler}>All users</button>
                <button className="button buttonMale" onClick={this.handleGetMale}>Users: male</button>
                <button className="button buttonFemale" onClick={this.handleGetFemale}>Users: female</button>
                <FilterUsers handleSortUsersDown={this.handleSortUsersDown} handleSortUsersUp={this.handleSortUsersUp} />
                <div className="main">
                {this.state.users
                    .filter((user) => {
                        return this.state.isAll || user.sex === this.state.male
                    })
                    .map(({ id, name, hobby, sex, age }) => {
                        return <div className="miniConteiner">
                                    <p className="users" key={id}>{name}, hobby: {hobby}, {sex}, age: {age}</p>
                                    <button className="buttonReset" onClick={() => this.handleDeleteUsers(id)}>delete</button>
                            </div>
                    })
                }
                </div>
                <AddUsers handleAddUser={this.handleAddUser} users={this.state.users} />
            </div>
        </>
        )
    }
}

export default Users;
import React, { Component } from 'react';

const users = [
    {
        id: 1,
        name: "Sam"
    },
    {
        id: 2,
        name: "Peter"
    },
];

class Users extends Component {
    userHtml(user) {
        return (
            <div>
                <div>UserId: {user.id}</div>
                <div>UserName: {user.name}</div>
            </div>
        )
    }

    usersHtml(users) {
        return users.map(this.userHtml)
    }

    render() {
        return (
            <div className="Users">
                <header className="User-header">
                    Users
                </header>
                <section>
                    { this.usersHtml(users) }
                </section>
            </div>
        );
    }
}

export default Users;
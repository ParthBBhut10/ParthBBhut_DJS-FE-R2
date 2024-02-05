import React from 'react';

class Listusers extends React.Component {
    render() {
        const { users } = this.props;

        const sortedUsers = users.slice().sort((a, b) =>
            a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase())
        );
        return (
            <div>
                <div className='user-count'>Users:{users.length}</div>
                {users.length > 0} && (
                <ul className='user-list'>
                    {sortedUsers.map((user, index) => (
                        <li key={index}>{'${user.firstName} ${user.firstName}'} </li>
                    ))}
                </ul>
                )
            </div>
        );
    }
}

export default Listusers;
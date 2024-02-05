import React from 'react';

import withLoadingSpinner from './withLoadingSpinner';

import UserList from './UserList';

const UserListWithLoadingSpinner = withLoadingSpinner(UserList);

function App() {

  return (

    <div className="App">

      <UserListWithLoadingSpinner />

    </div>

  );

}

export default App;
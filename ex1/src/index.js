import React from 'react';
import ReactDOM from 'react-dom';
import Card from './card'
import Users from './users'
import './index.css'

class App extends React.Component {
  render(){
    return (
      <div className="container-box">
      {
        Users.map((user) => <Card key={user.id} user={user} />)
      }
      </div>
    );
  };
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);




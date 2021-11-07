import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

  state = {
    starWarsChars: [
      {name: 'Дарт Вэйден', side: 'dark'},
      {name: 'Люк Скайворкер', side: 'light'},
      {name: 'Палпатин', side: 'dark'},
      {name: 'Обиван Кеноби', side: 'light'}
    ]
  }

  render() {
    return (
      <ul>
        {this.state.starWarsChars.map((char, index) => {
          return (
            <li key={char.name + index}>
              <strong>{char.name}</strong> - {char.side}
            </li>
          )
        })}

      </ul>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

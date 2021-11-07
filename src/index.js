import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const starWarsChars = [
  {name: 'Дарт Вэйден', side: 'dark'},
  {name: 'Люк Скайворкер', side: 'light'},
  {name: 'Палпатин', side: 'dark'},
  {name: 'Обиван Кеноби', side: 'light'}
]

const App = ({list, side}) => {
  const filteredList = list.filter(char => char.side === side)
  return (
    <ul>
      {filteredList.map((char, index) => {
        return (
          <li key={char.name + index}>
            <strong>{char.name}</strong> - {char.side}
          </li>
        )
      })}
    </ul>
  )
}

ReactDOM.render(<App list={starWarsChars} side="light"/>, document.getElementById('root'))

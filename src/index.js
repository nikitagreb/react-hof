import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const starWarsChars = [
  {name: 'Дарт Вэйден', side: 'dark'},
  {name: 'Люк Скайворкер', side: 'light'},
  {name: 'Палпатин', side: 'dark'},
  {name: 'Обиван Кеноби', side: 'light'}
]

const App = ({list}) => (
  <ul>
    {list.map((char, index) => {
      return (
        <li key={char.name + index}>
          <strong>{char.name}</strong> - {char.side}
        </li>
      )
    })}
  </ul>
)

const withFilteredProps = Component => ({list, side}) => {
  const filteredList = list.filter(char => char.side === side)
  return <Component list={filteredList}/>
}

const FilteredList = withFilteredProps(App)

ReactDOM.render(
  <FilteredList list={starWarsChars} side="dark"/>,
  document.getElementById('root')
)

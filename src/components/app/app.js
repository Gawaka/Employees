import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [                            // // База данных, имитация сервера
        {name: 'Dio B.', salary: 800, increase: true, id: 1},
        {name: 'Okujasu N.', salary: 2300, increase: false, id: 2},
        {name: 'Jotaro K.', salary: 5000, increase: false, id: 3},
      ]
    }
    this.maxId = 4;
  }

  addEmployee = (name, salary)=> {                // // Метод добавляющий новый obj сотрудника (шаг 1)
    const newEmployee = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
    };

    this.setState(({data})=>({
      data: [...data, newEmployee]
    }))
  }

  deleteItem = (id)=> {             // // Метод удаляющий єлемент массива (сотрудника)
    this.setState(({data})=> {
      return {
        data: data.filter(item => item.id !== id)   // // если item.id != id то єлемент удаляется
      }

    })
  }

  render() {
    const {data} = this.state;

    return (
      <div className="app">
          <AppInfo />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={data}                         /* Передаем массив data в компонент */
            onDelete={this.deleteItem}          /* Передаем prop в компонент ниже по иерархии */
          />
          <EmployeesAddForm addEmployee={this.addEmployee}/>        {/* передаем новый метод в компонент через пропсы */}
      </div>
    );
  }
}

export default App;

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
        {name: 'Dio B.', salary: 800, increase: false, rise: true, id: 1},
        {name: 'Okujasu N.', salary: 2300, increase: true, rise: false, id: 2},
        {name: 'Jotaro K.', salary: 5000, increase: false, rise: false, id: 3},
      ],
      term: '',
      filter: 'all'
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

    this.setState(({data})=>({ //Создает new arr, который включает существ. элем из data, добавляет элемент newEmployee в конец arr.
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

  // onToggleIncrease = (id)=> {
  //   this.setState(({data})=> ({
  //     data: data.map(item => {                        // перебираем массив
  //       if (item.id === id) {                         // если наши id совпали, тогда возвращаем обдж
  //         return {...item,  increase: !item.increase} // разворачиваем obj item в котором будет тоглиться increase
  //       }
  //       return item;                                  // // Если условие не выполнилось то возвращаем item
  //     })
  //   }))
  // }

  // onToggleRise = (id)=> {
  //   this.setState(({data})=> ({
  //     data: data.map(item => {                        // перебираем массив
  //       if (item.id === id) {                         // если наши id совпали, тогда возвращаем обдж
  //         return {...item,  rise: !item.rise}         // разворачиваем obj item в котором будет тоглиться increase
  //       }
  //       return item;                                  // // Если условие не выполнилось то возвращаем item
  //     })
  //   }))
  // }

  
  onToggleProp = (prop, id)=> {                 // // Объеденяем два метода в один onToggleIncrease/Rise
    this.setState(({data})=> ({
      data: data.map(item=> {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]} // [prop] приходит для каждого варианта, с помошью data-attribute в emp-list-it 
        }
        return item;
      })
    }))
  }

  searchEmp = (items, term)=> {
    if (term.length === 0) {      // // Если строчка === 0 просто возвращаем items
      return items;
    }

    return items.filter(item => {         // // Если предидущее условие не сработало, фильтруем массив
      return item.name.indexOf(term) > -1
    })
  }

  onUpdateSearch = (term)=> {
    this.setState({term});
  }

  filterPost = (items, filter)=> {
    switch (filter) {
      case 'rise':
        return items.filter(item => item.rise);           // // Возвращаем только не итемы у которых есть rise
      case 'moreThen1000':
        return items.filter(item => item.salary > 1000);   // // Возвращаем только те где зп больше 1000
      default:
        return items                                      // // Если фильтр не установлен просто возвр массив
    }
  }

  onFilterSelect = (filter)=> {
    this.setState({filter});
  }

  render() {
    const {data, term, filter} = this.state;
    const employees = this.state.data.length;                           // // Получаем длинну массива (кол.во сотрудников)
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);                         // видимые данные
    
    return (
      <div className="app">
          <AppInfo 
            employees={employees} 
            increased={increased}
          />
  
          <div className="search-panel">
              <SearchPanel 
                onUpdateSearch={this.onUpdateSearch}
              />

              <AppFilter 
                filter={filter}
                onFilterSelect={this.onFilterSelect}
              />
          </div>
          
          <EmployeesList 
            data={visibleData}                         /* Передаем массив data в компонент */
            onDelete={this.deleteItem}          /* Передаем prop в компонент ниже по иерархии */
            onToggleProp={this.onToggleProp}
          />

          <EmployeesAddForm 
            addEmployee={this.addEmployee}       /* передаем новый метод в компонент через пропсы */
          />
      </div>
    );
  }
}

export default App;

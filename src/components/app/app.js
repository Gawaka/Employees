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
      data: [
        {name: 'Jotaro Kujo', salary: 3000, id:1, increase: true, rise: true},
        {name: 'Dio Brando', salary: 5000, id:2, increase: false, rise: false},
        {name: 'Cezar Ceppeli', salary: 2000, id:3, increase: false, rise: false}
      ]
    }
    this.maxId = 4;
  }

  addItem = (name, salary)=> {
    if (name && salary) {
      const newEmployee = {
        name,
        salary,
        increase: false,
        rise: false,
        id: this.maxId++
      }

      this.setState(({data})=> ({
        data: [...data, newEmployee]
      }))
    }
  }

  deleteItem = (id)=> {
    this.setState(({data})=> {
      return {
        data: data.filter(item=> item.id !== id)
      }
      
    })
    
  }

  onToggleProp = (id, prop)=> {
    this.setState(({data})=> ({
      data: data.map(item=> {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}
        }
        return item;
      })
    }))
  }

  render() {
    const {data} = this.state;
    const employees = data.length;
    const increased = data.filter(item=> item.increase).length;

    return (
      <div className="app">
          <AppInfo 
            employees={employees}
            increased={increased}
          />
  
          <div className="search-panel">
              <SearchPanel/>
              <AppFilter/>
          </div>
          
          <EmployeesList 
            data={data}
            onDelete={this.deleteItem}
            onToggleProp={this.onToggleProp}
          />
          <EmployeesAddForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;

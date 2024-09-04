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
        {name: 'Jotaro Kujo', salary: 3000, id:1, increase: true},
        {name: 'Dio Brando', salary: 5000, id:2, increase: false},
        {name: 'Cezar Ceppeli', salary: 2000, id:3, increase: false}
      ]
    }
  }

  deleteItem = (id)=> {
    this.setState(({data})=> {
      return {
        data: data.filter(item=> item.id !== id) /// // / // / / ЗАКОМИТИТЬ
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
            data={data}
            onDelete={this.deleteItem}
          />
          <EmployeesAddForm/>
      </div>
    );
  }
}

export default App;

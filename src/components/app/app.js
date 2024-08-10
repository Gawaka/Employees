import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

function App() {

  const data = [                            // // База данных, имитация сервера
    {name: 'Dio B.', salary: 800, increase: true},
    {name: 'Okujasu N.', salary: 2300, increase: false},
    {name: 'Jotaro K.', salary: 5000, increase: false},
  ]

  return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
        </div>
        
        <EmployeesList data={data}/>                   {/* Передаем массив data в компонент */}
        <EmployeesAddForm/>
    </div>
  );
}

export default App;

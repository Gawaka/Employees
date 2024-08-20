import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete}) => {   // // Помещаем в виде props нашу базу данных, oD принимаем как аргумент из app.js

    const elements = data.map(item => {  // // Перебираем массив и формируем компонент. Разворачиваем в нем props с помошью spread
        const {id, ...itemProps} = item;     // // Дестр пропсы, отдельно достаем id каждого элем и остальные пропсы помещ в itemProps
        return (
            <EmployeesListItem 
                key={id} 
                {...itemProps}
                onDelete={()=> onDelete(id)}
            />
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;
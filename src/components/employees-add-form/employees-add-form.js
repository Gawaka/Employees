import { Component } from 'react';

import './employees-add-form.css';

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: ''
        }
    }

    onValueChange = (e)=> {                         // // Метод изменяющий стостояние сотрудников
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit = (e)=> {                              // // Метод принимающий данные в форму для добавления сотрудника (шаг2)
        e.preventDefault();
        const {name, salary} = this.state;
        if(name && salary) {                        // // Если в поле name salary ввели данные сотрудник добавится
            this.props.addEmployee(name, salary);
            this.setState({                                // // Изменяем состояние 
                name: '',
                salary: ''
            })
        } else {
            alert('Введіть данні співробітника!')
        }
    }

    render() {
        const {name, salary} = this.state;
        const {addEmployee} = this.props;


        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                    onSubmit={this.onSubmit}                    // // Добавляем метод в форму (важно: не на кнопку а в форму)
                >
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Как его зовут?"
                        name='name'                              /* Добавляем дата атрибут */
                        value={name}
                        onChange={this.onValueChange}
                    />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="З/П в $?"
                        name='salary'                             /* Добавляем дата атрибут */
                        value={salary}
                        onChange={this.onValueChange}
                    />
    
                    <button type="submit"
                            className="btn btn-outline-light">Добавить</button>
                </form>
            </div>
        )
    }

}

export default EmployeesAddForm;
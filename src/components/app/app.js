import './app.css'
import React from "react";
import uuid from 'react-uuid'
import AppInfo from '../app-info/app-info'
import SearchPanel from "../search-panel/search-panel"
import AppFilter from "../app-filter/app-filter"
import EmployeesList from '../employees-list/employees-list'
import EmployeesAdd from "../employees-add-form/employees-add-form";

function App() {

    const [data, changeData] = React.useState(
        [
            {id: uuid(), name:"Демчук Степан.", salary: '670$', premials: true, increase: true},
            {id: uuid(), name:"Мороз Андрій.", salary: '1300$', premials: false, increase: false},
            {id: uuid(), name:"Мішко Володимир", salary: '900$', premials: false, increase: false}
        ]
    )
    let [term, changeTerm] = React.useState('');

    let [filter, changeFilter] = React.useState('default');

    let [idForChangeSalary, changeId] = React.useState('');


    function changePremials(id) {
        changeData(data.map(employe => {
            if(employe.id === id) employe.premials = !employe.premials
            return employe
        }))
    }

    function increasePerson(id) {
        changeData(data.map(employe => {
            if(employe.id === id) employe.increase = !employe.increase
            return employe
        }))
    }

    function deletePerson(id) {
        changeData(data.filter(item => item.id !== id))
    }

    function addNewEmployee() {
        const nameNewEmploye = document.querySelector('.name-new-employee').value
        const salaryNewEmploye = document.querySelector('.salary-new-employee').value

        if (nameNewEmploye && salaryNewEmploye) {
            changeData(data.concat([
                {id: uuid(), name: nameNewEmploye, salary: salaryNewEmploye + '$', premials: false, increase: false}
            ]))

            document.querySelector('.name-new-employee').value = ''
            document.querySelector('.salary-new-employee').value = ''
        }
    }

    const searchEmployee = (items, term) => {
        if (term.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1
        })
    }

    const filterPost = (items, filter) => {
        switch(filter) {
            case 'improve':
                return items.filter(item => item.increase === true)
            case 'rich':
                return items.filter(item => parseInt(item.salary.replace(/$/g, '')) >= 1000)
            default:
                return items
        }
    }

    function changeFilterToImprove() {
        changeFilter(filter = 'improve')
    }

    function changeFilterToRich() {
        changeFilter(filter = 'rich')
    }

    function changeFilterToDefault() {
        changeFilter(filter = '')
    }

    function addTerm() {
        changeTerm(term = document.querySelector('.searchEmployee').value)
    }

    function getIdClickChangeSalary(id) {
        changeId(idForChangeSalary = id)
    }

    function changeSalary(event) {
        changeData(data.map(employe => {
            if(employe.id === idForChangeSalary) employe.salary = event.target.value
            return employe
        }))
    }

    const visibleData = filterPost(searchEmployee(data, term), filter);

    return (
        <div className = "App">
            <AppInfo data={visibleData}/>

            <div className="search-panel">
                <SearchPanel addTerm={addTerm}/>
                <AppFilter filter={filter} changeFilterToImprove={changeFilterToImprove} changeFilterToRich={changeFilterToRich} changeFilterToDefault={changeFilterToDefault}/>
                <EmployeesList data={visibleData} changePremials={changePremials} increasePerson={increasePerson} deletePerson={deletePerson} changeSalary={changeSalary} getIdClickChangeSalary={getIdClickChangeSalary}/>
            </div>
            <EmployeesAdd addNewEmployee={addNewEmployee} />
        </div>
    );
}

export default App;
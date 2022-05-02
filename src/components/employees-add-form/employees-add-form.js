import React from 'react'
import './employees-add-form.css'

const EmployeesAdd = ({addNewEmployee}) => {
    return (
        <div className="app-add-form">
            <h3>Добавте нового співробітника:</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                       className="form-control new-post-label name-new-employee"
                       placeholder="Як його звати?" />
                <input type="number"
                       className="form-control new-post-label salary-new-employee"
                       placeholder="З/П в $?" />

                <button type="button"
                        className="btn btn-outline-light" onClick={() => addNewEmployee()}>Додати</button>
            </form>
        </div>
    )
}

export default EmployeesAdd
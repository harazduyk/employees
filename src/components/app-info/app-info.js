import React from 'react'
import './app-info.css'

const AppInfo = ({data}) => {

    const countEmployee = data.length;
    let countPremialsEmployee = 0;
    let countIncreaseEmployee = 0;

    (function calculateCountsEmployees() {
        data.map(item => {
            if (item.premials) {
                countPremialsEmployee += 1
            }
            if(item.increase) {
                countIncreaseEmployee += 1
            }
            return item
        })
    })()

    return (
        <div className='AppInfo'>
            <h1>Облік співробітників у компанії</h1>
            {countEmployee ? <h2>Загальна кількість співробітників: {countEmployee}</h2> : null}
            {countPremialsEmployee ? <h2>Премію отримають: {countPremialsEmployee}</h2> : null}
        </div>
    )
}

export default AppInfo
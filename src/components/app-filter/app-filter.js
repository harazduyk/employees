import React from 'react'
import './app-filter.css'

const AppFilter = ({filter, changeFilterToImprove, changeFilterToRich, changeFilterToDefault}) => {

    let classNameDef = ''
    let classNameImprove = ''
    let classNameRich = ''

    if (filter === 'improve') {
        classNameImprove = 'btn btn-light';
    } else if (filter === 'rich') {
        classNameRich = 'btn btn-light';
    } else {
        classNameDef = 'btn btn-light';
    }


    return (
        <div className="btn-group">
            <button className={classNameDef || 'btn btn-outline-light'}
                    type="button"
                    onClick={changeFilterToDefault}>
                Всі співробітники
            </button>
            <button className={classNameImprove || 'btn btn-outline-light'}
                    type="button"
                    onClick={changeFilterToImprove}>
                Співробітники на підвищення
            </button>
            <button className={classNameRich || 'btn btn-outline-light'}
                    type="button"
                    onClick={changeFilterToRich}>
                З/П більше 1.000$
            </button>
        </div>
    )
}

export default AppFilter
import React from 'react'
import PropTypes from 'prop-types'
import s from '../Statistics/Statistics.module.scss'
import rc from 'randomcolor'

function Statistics({ stats, title }) {
    return (
        <div className={`section wrapper`}>
            {title && <h2 className={s.title}>Upload stats</h2>}
            <ul className={s.stat_list}>
                {stats.map(item => (
                    <li className={s.stat_item}
                        key={item.id}
                        style={{ backgroundColor: rc({ luminosity: 'dark' }) }}
                    >
                        <span className={s.label} >{item.label}</span>
                        <span className={s.percentage} >{item.percentage}%</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    ).isRequired,
    title: PropTypes.string
}

export default Statistics

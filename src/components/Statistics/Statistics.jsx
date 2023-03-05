import React from 'react'
import PropTypes from 'prop-types'

function Statistics({ stats, title }) {
    return (
        <>

            <div className={`section`}>
                {title && <h2 className="title">Upload stats</h2>}
                <ul className="stat-list">
                    {stats.map(item => (
                        <li key={item.id}>
                            <span className="label" >{item.label}</span>
                            <span className="percentage" >{item.percentage}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </>
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

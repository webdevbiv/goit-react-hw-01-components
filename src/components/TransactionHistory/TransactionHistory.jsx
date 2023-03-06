import React from 'react'
import PropTypes from 'prop-types'
import s from '../TransactionHistory/TransactionHistory.module.scss'

function TransactionHistory({ items }) {
    return (
        <div className={`section section_bg wrapper`}>
            <table className={s.transaction_history}>
                <thead>
                    <tr>
                        <th><span>Type</span></th>
                        <th><span>Amount</span></th>
                        <th><span>Currency</span></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map(item => (
                        <tr key={item.id}>
                            <td>{item.type}</td>
                            <td>{item.amount}</td>
                            <td>{item.currency}</td>
                        </tr>
                    ))}
                </tbody >
            </table >
        </div>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}

export default TransactionHistory

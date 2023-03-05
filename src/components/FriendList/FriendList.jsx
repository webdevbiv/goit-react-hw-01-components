import React from 'react'
import PropTypes from 'prop-types'
import FriendListItem from './FriendListItem'

function FriendList({ friends }) {
    return (
        <>
            <div className={`section`}>
                <ul className="friend-list">
                    <FriendListItem friends={friends} />
                </ul>
            </div>
        </>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    ).isRequired
}

export default FriendList

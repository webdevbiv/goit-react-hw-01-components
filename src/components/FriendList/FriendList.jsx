import PropTypes from 'prop-types'
import FriendListItem from '../FriendListItem/FriendListItem'
import s from '../FriendList/FriendList.module.scss'

function FriendList({ friends }) {
    return (
        <div className={`section`}>
            <ul className={s.friend_list}>
                {friends.map(item => (
                    <FriendListItem friend={item} key={item.id} />
                ))}
            </ul>
        </div>
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

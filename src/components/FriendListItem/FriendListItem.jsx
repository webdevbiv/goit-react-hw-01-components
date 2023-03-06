import s from '../FriendListItem/FriendListItem.module.scss'
import PropTypes from 'prop-types'

function FriendListItem({ friend }) {

    return (
        <li className={`${s.item} wrapper section_bg`}>
            <span className={`
                ${s.status} 
                ${friend.isOnline ? s.online : s.offline}
                `}></span>
            <img className={s.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
        </li >
    )
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }).isRequired
}

export default FriendListItem

import s from '../FriendListItem/FriendListItem.module.scss'

function FriendListItem({ friends }) {

    return (
        friends.map(item => (
            <li className={`${s.item} wrapper section_bg`} key={item.id}>
                <span className={`
                ${s.status} 
                ${item.isOnline ? s.online : s.offline}
                `}></span>
                <img className={s.avatar} src={item.avatar} alt="User avatar" width="48" />
                <p className="name">{item.name}</p>
            </li >
        ))
    )
}

export default FriendListItem

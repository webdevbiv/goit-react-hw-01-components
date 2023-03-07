import PropTypes from 'prop-types'
import s from '../Profile/Profile.module.scss'

function Profile({ username, tag, location, avatar, stats: { followers, views, likes } }) {
    return (
        <div className={`section wrapper section_bg`}>
            <div className={s.profile}>
                <div>
                    <img
                        src={avatar}
                        alt="User avatar"
                        className={s.avatar}
                    />
                    <p className={s.name}>{username}</p>
                    <p className={s.tag}>{tag}</p>
                    <p className={s.location}>{location}</p>
                </div>
                <ul className={s.stats}>
                    <li className={s.item}>
                        <span className={s.label}>Followers</span>
                        <span className={s.quantity}>{followers}</span>
                    </li>
                    <li className={s.item}>
                        <span className={s.label}>Views</span>
                        <span className={s.quantity}>{views}</span>
                    </li>
                    <li className={s.item}>
                        <span className={s.label}>Likes</span>
                        <span className={s.quantity}>{likes}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}

export default Profile

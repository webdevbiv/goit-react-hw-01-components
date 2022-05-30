import React from "react";
import PropTypes from "prop-types";
import { Section, ProfileWrapper, ProfileImgWrapper, ProfileImg, ProfileName, ProfileText, ProfileStatsList, ProfileStatsItem, ProfileStatsCounter } from '../style'


const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <Section>
            <ProfileWrapper >
                <ProfileImgWrapper >
                    <ProfileImg alt='user' src={avatar} />
                    <ProfileName >{username}</ProfileName>
                    <ProfileText>{tag}</ProfileText>
                    <ProfileText>{location}</ProfileText>
                </ProfileImgWrapper>

                <ProfileStatsList >
                    <ProfileStatsItem>
                        <span >Followers</span>
                        <ProfileStatsCounter >{stats.followers}</ProfileStatsCounter>
                    </ProfileStatsItem>
                    <ProfileStatsItem>
                        <span >Views</span>
                        <ProfileStatsCounter >{stats.views}</ProfileStatsCounter>
                    </ProfileStatsItem>
                    <ProfileStatsItem>
                        <span >Likes</span>
                        <ProfileStatsCounter >{stats.likes}</ProfileStatsCounter>
                    </ProfileStatsItem>
                </ProfileStatsList>
            </ProfileWrapper>
        </Section>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired
}

export default Profile
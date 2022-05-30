import React from 'react';
import PropTypes from "prop-types";
import { Section, FriendListWrapper, FriendListList, FriendListItem, FriendListStatus, FriendListImage, FriendListName } from '../style'

const FriendList = ({ friends }) => {
    return (
        <Section>
            <FriendListWrapper>
                <FriendListList>
                    {friends.map(item => (
                        <FriendListItem key={item.id}>
                            <FriendListStatus status={item.isOnline}></FriendListStatus>
                            {/* <p>{item.isOnline}</p> */}
                            <FriendListImage src={item.avatar} />
                            <FriendListName>{item.name}</FriendListName>
                        </FriendListItem>
                    ))}
                </FriendListList>
            </FriendListWrapper>
        </Section>
    )
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
}

export default FriendList
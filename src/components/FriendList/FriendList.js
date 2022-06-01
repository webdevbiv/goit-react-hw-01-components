// import React, { Component } from "react";
import React from "react";
import PropTypes from "prop-types";
import { Section, FriendListWrapper, FriendListList, FriendListItem, FriendListStatus, FriendListImage, FriendListName } from '../style'



// class MyClassComponent extends Component {
//     static defaultProps = {};

//     static propTypes = {};

//     render() {
//         return <div>Class Component</div>;
//     }
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
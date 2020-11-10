import React from "react";

function Friend (props) {

    function removeFriend () {
       const updatedFriends = props.friendList.filter(friend => friend !== props.name);
        props.updateFriends([updatedFriends]);
    }

    return (
        <div onClick={removeFriend}>
            <h1>Friend: {props.name}</h1>
        </div>
    )
}

export default Friend;
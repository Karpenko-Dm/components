import FriendListItem from "components/FriendListItem/FriendListItem"
  import {List} from "./FriendList.styles";

 
const FriendList = ({friends}) => {

    return (
           <List>
            {friends.map(friend => (
                <FriendListItem
            key={friend.id}
            avatar = {friend.avatar}
            name={friend.name}
            status = {friend.isOnline}
            
            // isOnline = {friends.isOnline}
            />
            ))}
        
           </List>
           
        
    );
};

export default FriendList;

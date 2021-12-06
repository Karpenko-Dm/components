// import { css } from '@emotion/react';
// import {ListItem, Text, Circle} from './FriendListItem.styles';
 import {BsFillCircleFill} from 'react-icons/bs';
import css from './FriendListItem.module.css';



function FriendListItem ({avatar, name, status}) {
    return (
    // <ListItem>
    
    //     <Circle >{status} @ </Circle>
    //     <img  src={avatar} alt="User avatar" width="64" />
    //     <Text>{name}</Text> 
    // </ListItem>
<li className={css.list}>
<span >
    <BsFillCircleFill className ={`${css.chip} ${css[status]}`}/>
    {status}</span>
<img  src={avatar} alt="User avatar" width="64" />
<p>{name}</p>

</li>

    );
};

export default FriendListItem

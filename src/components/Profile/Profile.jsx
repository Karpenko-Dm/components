import React from "react";
import {Container, Description, Avatar, Name, Tag, Location, Stats, Label, Quantity} from "./Profile.styles";

import PropTypes from "prop-types";
import user from "../../user.json"

/* <Profile
username={user.username}
tag={user.tag}
location={user.location}
avatar={user.avatar}
stats={user.stats}
/> */

const Profile = (username, tag, location, avatar, stats) => {
  
return <Container>
  
  <Description>
    <Avatar
      src={user.avatar}
      alt="User avatar"
    />

    <Name>{user.username}</Name>
    <Tag>@{user.tag}</Tag>
    <Location>{user.location}</Location>
  </Description>

  <Stats>
    {/* {menuStats.map(({name, quant}) => (
    <MenuItem key={name}>
    {name} {quant}
    </MenuItem>
    ))} */}

    <li>
      <Label>Followers </Label>
      <Quantity>{user.stats.followers}</Quantity>
    </li>
    <li>
      <Label>Views </Label>
      <Quantity>{user.stats.views}</Quantity>
    </li>
    <li>
      <Label>Likes </Label>
      <Quantity>{user.stats.likes}</Quantity>
    </li>

  </Stats>

</Container>
};

Profile.propTypes = {
  username: PropTypes.string,
   tag:PropTypes.string,
   location:PropTypes.string,
   avatar:PropTypes.node,
   stats:PropTypes.node,
}

export default Profile;
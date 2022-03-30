import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";

const UsersView = ({ users, ...rest }) => {
  return (
    <AvatarGroup size="xs" max={1} {...rest}>
      {users.map((user) => (
        <Avatar key={uuidv4()} src={user.image} />
      ))}
    </AvatarGroup>
  );
};

export default UsersView;

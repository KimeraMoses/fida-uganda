import { Avatar, IconButton } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { MdEdit } from "react-icons/md";
import AvatarSelector from "./AvatarSelector";

const SelectAvatar = ({ avatar, setAvatar, iconObj, ...rest }) => {
  const [showEditIcon, setShowEditIcon] = useState(false);
  const input = useRef(null);

  const onMouseEnter = () => {
    setShowEditIcon(true);
  };
  const onMouseLeave = () => {
    setShowEditIcon(false);
  };

  const handleImageChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  if (!avatar) {
    return <AvatarSelector setAvatar={setAvatar} {...rest} iconObj />;
  }

  const url = URL.createObjectURL(avatar);
  return (
    <Avatar
      name={avatar.name}
      src={url}
      {...rest}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ position: "relative" }}
    >
      {showEditIcon && (
        <>
          <input
            type="file"
            ref={input}
            style={{ display: "none" }}
            onClick={handleImageChange}
          />
          <IconButton
            position="absolute"
            borderRadius="full"
            bgColor="gray.100"
            borderColor="purple"
            border="2px"
            bottom={-2}
            right={-2}
            icon={<MdEdit />}
            onClick={(e) => input.current && input.current.click()}
          />
        </>
      )}
    </Avatar>
  );
};

export default SelectAvatar;

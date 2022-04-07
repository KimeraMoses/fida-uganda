import { Avatar, IconButton } from "@chakra-ui/react";
import { useState, useRef } from "react";
import { MdEdit } from "react-icons/md";
import { toastError } from "../../lib/toastDetails";
import AvatarSelector from "./AvatarSelector";

const SelectAvatar = ({
  setAvatar,
  iconObj,
  toast,
  url,
  setImageUrl,
  ...rest
}) => {
  const [showEditIcon, setShowEditIcon] = useState(false);
  const input = useRef(null);

  const onMouseEnter = () => {
    setShowEditIcon(true);
  };
  const onMouseLeave = () => {
    setShowEditIcon(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file.size > 2097152) {
      toast(toastError("Image size should be less than 2MB"));
    } else {
      setAvatar(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  if (!url) {
    return (
      <AvatarSelector
        toast={toast}
        setAvatar={setAvatar}
        url={url}
        setImageUrl={setImageUrl}
        {...rest}
        {...iconObj}
      />
    );
  }

  return (
    <Avatar
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

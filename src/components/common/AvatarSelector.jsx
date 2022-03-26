import { useRef } from "react";
import { IconButton } from "@chakra-ui/react";
import { MdOutlineAddAPhoto } from "react-icons/md";

const AvatarSelector = ({ setAvatar, iconObj, ...rest }) => {
  const input = useRef(null);

  const handleImageChange = (event) => {
    setAvatar(event.target.files[0]);
  };

  return (
    <>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={handleImageChange}
        ref={input}
      />
      <IconButton
        onClick={(e) => input.current && input.current.click()}
        icon={<MdOutlineAddAPhoto {...iconObj} />}
        {...rest}
      />
    </>
  );
};

export default AvatarSelector;

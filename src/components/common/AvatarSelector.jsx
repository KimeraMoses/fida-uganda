import { useRef } from "react";
import { IconButton } from "@chakra-ui/react";
import { MdOutlineAddAPhoto } from "react-icons/md";
import { toastError } from "../../lib/toastDetails";
import { TEN_MBS_IN_BYTES } from "../../lib/constants";

const AvatarSelector = ({
  toast,
  setAvatar,
  iconObj,
  url,
  setImageUrl,
  ...rest
}) => {
  const input = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file.size > TEN_MBS_IN_BYTES) {
      toast(toastError("Image size should be less than 10MB"));
    } else {
      setAvatar(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <input
        style={{ display: "none" }}
        type="file"
        onChange={handleImageChange}
        ref={input}
        accept="image/png, image/jpeg"
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

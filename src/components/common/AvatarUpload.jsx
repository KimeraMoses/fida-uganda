import { Avatar, Text } from "@chakra-ui/react";
import ImageUpload from "./ImageUpload";

const AvatarUpload = ({ image, setImage, setFile }) => {
  if (image) {
    return <Avatar alignSelf="center" src={image} size="2xl" />;
  }
  return (
    <>
      <ImageUpload onFileSelectSuccess={setImage} getFile={setFile} />
      <Text align="center" fontSize="md">
        Please Upload Photo
      </Text>
    </>
  );
};

export default AvatarUpload;

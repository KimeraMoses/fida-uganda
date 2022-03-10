import { As } from "@chakra-ui/react";

export default interface ListItem {
  text: string;
  url: string;
  icon: As<any> | undefined;
}

import { As } from "@chakra-ui/react";

export interface IListItem {
  id: number;
  path: string;
  name: string;
  icon: As<any> | undefined;
}

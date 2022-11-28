import { UserData } from "@/services";
import { BoxProps, FlexProps } from "@chakra-ui/react";
import { ReactText } from "react";
import { IconType } from "react-icons";

export interface LinkItemProps {
  name: string;
  icon: IconType;
  route: string;
}

export interface SidebarProps extends BoxProps {
  onClose: () => void;
  LinkItem: Array<LinkItemProps>;
}

export interface NavItemProps extends FlexProps {
  icon: IconType;
  children: string;
}

export interface MobileProps extends FlexProps {
  onOpen: () => void;
}

export interface PersonFooterProps {
  avatar: string;
  name: string;
}

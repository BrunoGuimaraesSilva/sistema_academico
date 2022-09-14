import {
  Flex,
  FlexProps,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { ReactText } from "react";
import { IconType } from "react-icons/lib";
import { NavItemProps } from "./sidebar.interface";

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  children,
  ...rest
}: NavItemProps) => {
  const colorHover = useColorModeValue(
    {
      bg: "black",
      color: "white",
    },
    {
      bg: "white",
      color: "black",
    }
  );

  const colorIcon = useColorModeValue(
    {
      color: "white",
    },
    {
      color: "black",
    }
  );
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={useColorModeValue("white", "gray.600")}
        margin={3}
        _hover={colorHover}
        {...rest}
      >
        {icon && (
          <Icon mr="4" fontSize="16" _groupHover={colorIcon} as={icon} />
        )}
        {children}
      </Flex>
    </Link>
  );
};

import {
  Flex, Icon,
  Link,
  useColorModeValue
} from "@chakra-ui/react";
import { NavItemProps } from "./sidebar.interface";

export const NavItem: React.FC<NavItemProps> = ({
  icon,
  children,
  ...rest
}: NavItemProps) => {
  const colorHover = useColorModeValue(
    {
      bg: "gray.400",
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
  const borderStyle = useColorModeValue(
    {
      border:'1px',
      borderColor:'gray.400'
    },
    {}
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
        {...borderStyle}
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

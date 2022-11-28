import {
  Box, Center, CloseButton, Drawer,
  DrawerContent, Flex, IconButton, SimpleGrid, useColorModeValue, useDisclosure
} from "@chakra-ui/react";
import { ReactNode } from "react";

import Image from "next/image";
import { useRouter } from 'next/router';
import { FiMenu } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import logo_black from "../../assets/logo_black.svg";
import { NavItem } from "./navItem";
import { PersonFooter } from "./personFooter";
import { LinkItemProps, MobileProps, SidebarProps } from "./sidebar.interface";
import { UserData } from "@/services";
import { parseCookies } from "nookies";

const SidebarContent = ({ onClose, LinkItem, ...rest }: SidebarProps) => {
  const router = useRouter()
  const cookies = parseCookies();
  const name = cookies.name;

  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", lg: '15%' }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Flex align={"center"}>
          <Center w="80px">
            <Image alt="logo" src={useColorModeValue(logo_black, logo)} />
          </Center>
        </Flex>
        <CloseButton display={{ base: "flex", lg: "none" }} onClick={onClose} />
      </Flex>
      <SimpleGrid columns={1}>
        {LinkItem.map((link) => (
          <NavItem onClick={(data) => { router.push(link.route) }} key={link.name} icon={link.icon}>
            {link.name}
          </NavItem>
        ))}
      </SimpleGrid>
      <Box
        w={{ base: "full", lg: '15%' }}
        bg={useColorModeValue("white", "gray.600")}
        position={"fixed"}
        left={0}
        bottom={0}
        right={0}
      >
        <PersonFooter
          avatar={
            "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          }
          name={name ? name : ''}
        />
      </Box>
    </Box>
  );
};

const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, lg: 60 }}
      px={{ base: 4, lg: 24 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent="flex-start"
      {...rest}
    >
      <IconButton
        variant="outline"
        onClick={onOpen}
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Center ml={2} w="80px">
        <Image alt="logo" src={useColorModeValue(logo_black, logo)} />
      </Center>
    </Flex>
  );
};

export default function Sidebar({
  children,
  linkItems,
}: {
  children: ReactNode;
  linkItems: Array<LinkItemProps>;
}): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", lg: "block" }}
        LinkItem={linkItems}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} LinkItem={linkItems}/>
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: "flex", lg: "none" }} onOpen={onOpen} />
      <Box ml={{ base: 0, lg: '15%' }} p="4">
        {children}
      </Box>
    </Box>
  );
}
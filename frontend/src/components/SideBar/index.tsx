import { Flex, Box , Stack , Text, Link as ChakraLink, LinkProps as ChakraLinkProps, Icon, Image, Divider, useBreakpointValue, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody} from "@chakra-ui/react";
import { RiDashboardLine, RiProjectorLine, RiServiceLine, RiTeamLine, RiUserLine } from "react-icons/ri";
import { VscProject} from "react-icons/vsc";

import NextLink from 'next/link'
import { ActiveLink } from "../ActiveLink";


export function SideBar(){
    const isDrawerSideBar = useBreakpointValue({
        base: true,
        lg: false,
    })

    if(isDrawerSideBar){
        return (
        <Drawer isOpen={true} placement="left" onClose={() => {}}>

            <DrawerOverlay>

                <DrawerContent>
                    <DrawerCloseButton mt="6"/>
                    <DrawerHeader>
                        Navegação
                    </DrawerHeader>
                    <DrawerBody>
                        BBBBBBBBBBB
                    </DrawerBody>
                </DrawerContent>

            </DrawerOverlay>

        </Drawer>
        )
    }
    return(
        <Box display="flex" as="aside" minW="250px" borderRightRadius={8} h="100vh" bg="gray.50" mx="auto" flexDir="column" alignItems="center" py="1.5rem">
            <NextLink href={"/admin-panel/dashbord"} passHref>
                <Image
                    w={["80px","90px","100px","120px","120px","120px","120px"]}
                    objectFit='cover'
                    src='/images/logo_s.svg'
                    alt='Logo da empresa Axtra'
                />
            </NextLink>
            <Divider mt="2.5rem" w="80%" borderColor="gray.300"/>
            <Stack spacing="6" align="flex-start" mt="1.5rem" w="100%" px="2.5rem">
                <Box>
                    <Text fontWeight="500" color="gray.500">
                        Administração
                    </Text>
                    <Stack spacing="3" mt="4" pl="4" align="stretch">
                        <ActiveLink href="/admin-panel/dashboard" passHref>

                            <ChakraLink display="flex" alignItems="center">
                                <Icon as={RiDashboardLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">
                                    Dashboard
                                </Text>
                            </ChakraLink>  

                        </ActiveLink>
                        <ActiveLink href="/admin-panel/team" passHref>

                            <ChakraLink display="flex" alignItems="center">
                                <Icon as={RiTeamLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">
                                    Equipa
                                </Text>
                            </ChakraLink>  

                        </ActiveLink>
                        <ActiveLink href="/admin-panel/project" passHref>

                            <ChakraLink display="flex" alignItems="center">
                                <Icon as={VscProject} fontSize="20" />
                                <Text ml="4" fontWeight="medium">
                                    Projeto
                                </Text>
                            </ChakraLink>  

                        </ActiveLink>
                        <ActiveLink href="/admin-panel/users" passHref>

                            <ChakraLink display="flex" alignItems="center">
                                <Icon as={RiUserLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">
                                    Utilizador
                                </Text>
                            </ChakraLink>  

                        </ActiveLink>
                        <ActiveLink href="/admin-panel/service" passHref>

                            <ChakraLink display="flex" alignItems="center">
                                <Icon as={RiServiceLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">
                                    Serviço
                                </Text>
                            </ChakraLink>  

                        </ActiveLink>
                          
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="500" color="gray.500" >
                        Configuração
                    </Text>
                    <Stack spacing="3" mt="4" pl="4" align="stretch">
                        
                        <ActiveLink href="#" passHref>

                            <ChakraLink display="flex" alignItems="center">
                                <Icon as={RiUserLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">
                                    menu 1
                                </Text>
                            </ChakraLink>  

                        </ActiveLink>
                        <ActiveLink href="#" passHref>

                            <ChakraLink display="flex" alignItems="center">
                                <Icon as={RiServiceLine} fontSize="20" />
                                <Text ml="4" fontWeight="medium">
                                    menu2
                                </Text>
                            </ChakraLink>  

                        </ActiveLink>
                          
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}
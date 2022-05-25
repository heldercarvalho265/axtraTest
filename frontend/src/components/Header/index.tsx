import {Flex, Switch, Button, Box, Stack, Text,Spacer, HStack,IconButton,Image, Link as ChakraLink} from '@chakra-ui/react'

import NextLink from 'next/link'

import {ArrowForwardIcon, CloseIcon, HamburgerIcon} from '@chakra-ui/icons'
import { useState } from 'react'
import { ColorModeSwitcher } from './ColorModeSwitcher.tsx'


export default function Header(){
    const [ display, setDisplay]= useState('none')
    return(
        <Flex backgroundColor={"gray.50"} w="100%" as="header" h={["3rem","5rem"]} align="center" justify="center" zIndex="10" pl={["1rem","1rem","6rem"]} pr={["1rem","1rem","4rem"]} position="fixed">
            {/* Left */}
            <NextLink href={"/"} passHref>
                <Image
                //{["10vh","5vh","5vh","10vh","10vh","15vh"]}
                    w={["80px","90px","100px","120px","120px","120px","120px"]}
                    objectFit='cover'
                    src='/images/logo_s.svg'
                    alt='Logo da empresa Axtra'
                />
            </NextLink>
           
            <Spacer />
            {/* Right */}
            <Flex 
                display={['none','none','none','flex','flex']}
                alignItems="center"

            >
            

                {/* Menu Horizontal Inicio */}
                <Flex
                    
                >
                        <NextLink href={"/"} passHref scroll>
                            <Button
                              ml="4"
                              fontWeight="medium"
                              as="a"
                              variant={"ghost"}
                              my={5}
                              w="100%"
                              
                              >
                                  Inicio
                            </Button>
                        </NextLink>
                        
                        <NextLink href={"/#team"} passHref >
                            <Button
                              ml="4"
                              fontWeight="medium"
                              as="a"
                              variant={"ghost"}
                              my={5}
                              w="100%"
                              
                              >
                                  Equipa
                            </Button>
                        </NextLink>
                        <NextLink href={""} passHref>
                            <Button
                              ml="4"
                              fontWeight="medium"
                              as="a"
                              variant={"ghost"}
                              my={5}
                              w="100%"
                              
                              >
                                  Projeto
                            </Button>
                        </NextLink>
                        <NextLink href="/#service" passHref>
                            <Button
                              ml="4"
                              fontWeight="medium"
                              as="a"
                              variant={"ghost"}
                              my={5}
                              w="100%"
                              
                              >
                                  Serviços
                            </Button>
                        </NextLink>
                        <NextLink href={""} passHref>
                            <Button
                              ml="4"
                              fontWeight="medium"
                              as="a"
                              variant={"ghost"}
                              my={5}
                              w="100%"
                              
                              >
                                  Sobre
                            </Button>
                        </NextLink>
                </Flex>
                {/* Menu Horizontal Fim */}
                <NextLink href="/contact" passHref >
                    <Button as="a" bgGradient='linear(to-l, #fb726e, #ffca2f)' size='sm' ml="5rem" color="white" fontWeight={"400"} leftIcon={<ArrowForwardIcon/>}>
                            Contacte-nos
                    </Button>
                </NextLink>
            </Flex>


            <ColorModeSwitcher/>
               
                
            
            
        </Flex>
    )
}
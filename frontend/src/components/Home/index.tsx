import { Flex, Heading,Button,Image,Box,Text ,Icon } from "@chakra-ui/react";
import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from '../Animation/animate.json'
import { useState } from "react";

import { MdPolicy } from "react-icons/md";
import {ArrowForwardIcon} from '@chakra-ui/icons'

import {useInViewport} from 'react-in-viewport';

export default function Home(){
    const [animationState, setAnimationState] = useState({
        isStopped: false, isPaused: false
    })
      const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      }
      
        
    return(
        <Flex flexDirection="column" mt={["5vh","10vh"]}>
            {/** Left start*/}
            <Flex
              align={["center" ]}
             // h={["35vh","80vh","45vh","60vh","75vh","80vh"]}
              h={["80vh"]}
              pl={["2rem","2rem","6rem"]}
              pr={["2rem","2rem","4rem"]}
              >
                <Flex
                  flexDirection="column"
                  align="center"
                  h={['40%','80%','80%', '80%','90%','100%']}
                  w={['100%','100%','100%','100%','100%','40%']}
                  >
                    <Box
                      display={"flex"}
                      flexDirection="column"
                      justifyContent="center"
                      w="100%"
                      h="100%"
                      >
                        <Heading fontSize={["20px","24px","28px","30px","35px","42px"] } fontWeight="500" pb={"0.8rem"}>
                            Olá, Seja bem-vindo!👋<br/>
                        </Heading>
                        <Text fontWeight="400" pb={"0.8rem"} fontSize={["12px","14px","15px","16px","18px","20px"] } pr=".5rem">
                            <Text as="span" fontWeight="400" > Astra Solutions, </Text> empresa de informática que atende a um público mais exigente e busca QUALIDADE em seus serviços.
                        </Text>
                        <Flex mt="1rem">
                            <Button color='white' bg="#272c70" variant='outline' fontWeight={"400"} h={["30px","50px"]} fontSize={["12px","18px"]} w={["120px","180px"]}> 
                                Melhores Projetos
                            </Button>
                            <Button fontSize={["12px","18px"]} w={["120px","180px"]} colorScheme='yellow' fontWeight={"400"} variant='outline' ml={'1rem'}  h={["30px","50px"]} color={"black.700"} leftIcon={<ArrowForwardIcon/>}>
                                Seu Projeto
                            </Button>
                        </Flex>
                        
                    </Box>
                </Flex>
                <Flex
                  align="center"
                  display={['none','none','none','flex','flex','flex']}
                  w={['auto','auto','auto','50%','60%','60%']}
                  >
                    <Flex
                      className='teste'
                      align={"center"}
                      h={"1000px"}
                      w={"1000px"}
                      right="0"
                      top={"0"}
                      position={"fixed"}
                      zIndex="-5">
                        <img src="images/Blur Gradient.svg"alt="" />
                    </Flex>
                    <Lottie options={defaultOptions}
                    /* width="100%"
                    height="100%"*/
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}/>
                </Flex>
                
            </Flex>
            {/** Left end*/}
            {/** Right start*/}
            <Flex
              h={"15vh"}
              mt="-5rem"
              alignItems="center"
              justifyContent={"center"}
              maxW="100%"
              flexWrap="wrap"

              >

                    <Text
                      display={"flex"}
                      alignItems={"center"}
                      mr="2rem"
                      fontWeight={"700"}
                      color={"#272c70"}>
                        <Icon
                        color={"#272c70"}
                        mr=".5rem"
                        as={MdPolicy}
                        w={8}
                        h={8}
                        />
                            Rapidez 
                      </Text>
                    <Text
                      display={"flex"}
                      alignItems={"center"}
                      mr="2rem"
                      fontWeight={"700"}
                      color={"#272c70"}>
                        <Icon
                        color={"#272c70"}
                        mr=".5rem"
                        as={MdPolicy}
                        w={8}
                        h={8}
                        />
                            Segurança
                      </Text>
                    <Text
                      display={"flex"}
                      alignItems={"center"}
                      mr="2rem"
                      fontWeight={"700"}
                      color={"#272c70"}>
                        <Icon
                        color={"#272c70"}
                        mr=".5rem"
                        as={MdPolicy}
                        w={8}
                        h={8}
                        />
                            Qualidade
                      </Text>
                    <Text
                      display={"flex"}
                      alignItems={"center"}
                      mr="2rem"
                      fontWeight={"700"}
                      color={"#272c70"}>
                        <Icon
                        color={"#272c70"}
                        mr=".5rem"
                        as={MdPolicy}
                        w={8}
                        h={8}
                        />
                            Integridade 
                      </Text>
                    <Text
                      display={"flex"}
                      alignItems={"center"}
                      mr="2rem"
                      fontWeight={"700"}
                      color={"#272c70"}>
                        <Icon
                        color={"#272c70"}
                        mr=".5rem"
                        as={MdPolicy}
                        w={8}
                        h={8}
                        />
                            Qualidade
                      </Text>
                    <Text
                      display={"flex"}
                      alignItems={"center"}
                      mr="2rem"
                      fontWeight={"700"}
                      color={"#272c70"}>
                        <Icon
                        color={"#272c70"}
                        mr=".5rem"
                        as={MdPolicy}
                        w={8}
                        h={8}
                        />
                            Integridade 
                      </Text>
            </Flex>
            {/** Right end */}
            
        </Flex>
    )
}
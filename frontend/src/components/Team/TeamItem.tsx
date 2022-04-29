import { Flex , Heading, Text,Image,ScaleFade,Box,IconButton} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons' 
import { MdOutlineAppBlocking } from "react-icons/md";

import React, { useRef,MutableRefObject } from 'react';
import {useInViewport} from 'react-in-viewport';
import { BsGithub,BsLinkedin } from "react-icons/bs";

interface TeamProps {
    url: string;
    name: string;
    description: string;
}
{/**ffca2f
fb726e
fc9754 */}
export default function TeamItem({url,name,description}:TeamProps ){
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const { inViewport } = useInViewport(ref,
    { rootMargin: "-300px" },
    { disconnectOnLeave: false },
    {}
  );
    return(    
        <ScaleFade
            initialScale={0.9}
            in={inViewport}
            whileHover={{ scale: 1.2 }}
        >
            <Flex ref={ref} h="260px" w="200px" flexDir="column" justifyContent="center" /*pl="1rem" m="2rem"*/ borderRadius="10" mr="2rem" mb="1.5rem" bgImg={"images/gradiente4.svg"} >
                {/*<MdOutlineAppBlocking fontSize="70px" color="#272c70" />*/}
                <Flex h="70%" borderRadius="10">
                    <Image src={`/images/${url}`} w="100%" borderRadius="10"/>
                </Flex>
                <Flex h="30%" flexDir="column" alignItems="center" justifyContent="center" >
                    <Text fontWeight="700">{name}</Text>
                    <Text fontSize="sm">{description}</Text>
                </Flex>
            </Flex>
        </ScaleFade>
    )
    
}
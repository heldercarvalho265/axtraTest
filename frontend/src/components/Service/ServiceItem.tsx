import { Flex , Heading, Text,Image,ScaleFade,Box,Icon} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons' 
//import { MdOutlineAppBlocking } from "react-icons/md";
import * as md from "react-icons/md";
import {BsClipboardData} from "react-icons/bs";
import React, { useRef,MutableRefObject } from 'react';
import {useInViewport} from 'react-in-viewport';

interface ServiceProps {
    icon: string;
    name: string;
    description: string;
}
{/**ffca2f
fb726e
fc9754 */}
export function ServiceItem( {icon,name,description} : ServiceProps){
 const ref1 = useRef() as MutableRefObject<HTMLDivElement>;
  const { inViewport } = useInViewport(ref1,
    { rootMargin: "-300px" },
    { disconnectOnLeave: false },
    {}
  );
    return(
            
                <Flex m="2rem" ref={ref1} h="200px" w="27%" flexDir="column" justifyContent="center" alignItems="center">
                    {/* <Icon as={} color="#6B7CFF"/>
                    */}
                    <Box w="70px" h="70px"  bg="#fc9754" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                       <Image src={`/icons/${icon}.svg`} w="35px" />
                    </Box>
                    
                                    
                    <Flex flexDir="column" w="100%" h="40%" mt="1.5rem" alignItems="center">
                        <Text fontSize="18px" fontWeight="700"  mb=".5rem" >
                            {name.toUpperCase()}
                        </Text>
                        <Text fontSize="sm">
                            {description}
                        </Text>
                    </Flex>
                    

                </Flex>

    )
}
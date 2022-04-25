import { Flex , Heading, Text,Image} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons' 
//import { MdOutlineAppBlocking } from "react-icons/md";
import * as md from "react-icons/md";

interface ServiceProps {
    icon: string;
    name: string;
    description: string;
}
{/**ffca2f
fb726e
fc9754 */}
export default function ServiceItem( {icon,name,description} : ServiceProps){
    return(
    <Flex h="200px" w="28%" flexDir="column" justifyContent="center" /*pl="1rem" m="2rem"*/ alignItems="center">
        {/*<Image src={`/icons/${icon}.svg`} w="60px"  mb="1rem" color="red"/>*/}
        
        <md.MdOutlineAppBlocking fontSize="70px" color="#272c70" />
        
        
        <Text fontSize="18px" fontWeight="700"  mb=".5rem" color="#272c70">
            {name.toUpperCase()}
        </Text>
        <Text fontSize="sm">
            {description}
        </Text>

    </Flex>)
}
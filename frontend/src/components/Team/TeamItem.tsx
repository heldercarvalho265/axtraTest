import { Flex , Heading, Text,Image} from "@chakra-ui/react";
import { AddIcon } from '@chakra-ui/icons' 
import { MdOutlineAppBlocking } from "react-icons/md";

interface TeamProps {
    url: string;
    name: string;
    description: string;
}
{/**ffca2f
fb726e
fc9754 */}
export default function TeamItem({url,name,description}:TeamProps ){
    return(
    <Flex h="325px" w="240px" flexDir="column" justifyContent="center" /*pl="1rem" m="2rem"*/ borderRadius="10" m="1rem" bgImg={"images/gradiente4.svg"} >
        {/*<MdOutlineAppBlocking fontSize="70px" color="#272c70" />*/}
        <Flex h="70%" borderRadius="10">
            <Image src={`/images/${url}`} w="100%" borderRadius="10"/>
        </Flex>
        <Flex h="30%" flexDir="column">
            <Text>AAAAA</Text>
            <Text>BBBB</Text>
            <Text>CCCC</Text>
            <Text>AAAAA</Text>
        </Flex>
        

    </Flex>)
}
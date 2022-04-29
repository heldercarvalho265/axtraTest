import { Flex,Heading,Text, theme,
    FormControl,
    SimpleGrid,
    FormLabel,
    FormErrorMessage,
    FormHelperText ,Input,Stack,Textarea,Button,Icon, Box} from "@chakra-ui/react";

    import { MdSend,MdLocalPhone,MdOutlineEmail,MdSupportAgent} from "react-icons/md";
import dynamic from 'next/dynamic';
import { SideBar } from "../../../components/SideBar";
import { HeaderAdmin } from "../../../components/Header/headerAdmin";
import Footer2 from "../../../components/Footer/footer2";


const Chart= dynamic(() => import('react-apexcharts'),{
    ssr:false
})

const options = {
    chart: {
        toolbar:{
            show:false
        },
        zoom:{
            enabled:false,
        },
        foreColor: theme.colors.gray[600]
    },
    grid:{
        show: false,
    },
    dataLabels:{
        enabled:false,
    },
    tooltip: {
        enabled: false,
    },
    xaxis:{
      // type: 'datetime',
       axisBorder:{
           color: theme.colors.gray[600]
       } ,
       axisTicks:{
            color:theme.colors.gray[600]
       },
       //data no formato do iso
      // categories:["2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19", "2018-09-19"]
    },
    fill:{
        opacity: 0.3,
        type:'gradient',
        gradient: {
            shade: 'light',
            opacityFrom: 0.7,
            opacityTo: 0.7, 
        }
    },
    
}

const series = [
    { name: 'series1', data: [31, 128, 10, 28, 61, 18, 109]},
    { name: 'series1', data: [59, 18, 16, 28, 14, 18, 59]},

]

export default function Dashboard(){
    return (
        <Flex w="100%" h = "100%" bg="#F0F2FE" flexDir="column">
            <Flex w="100%" h = "100%" bg="#F0F2FE" >


            
                <SideBar />
                
                <Flex w="100%" my="4" maxW={1480} px="6" flexDir="column">
                    <HeaderAdmin/>
                    <Flex flexDir="column">
                        <SimpleGrid flex="1" gap="4" minChildWidth="400px" alignItems="flex-star" mt="1rem" >
                            
                            <Box
                            p="8"
                            bg="gray.50"
                            borderRadius={8}
                            pb="4"
                            h="15vh"
                            >
                                <Text>
                                    BBBB
                                </Text>
                            </Box>
                            <Box
                            p="8"
                            bg="gray.50"
                            borderRadius={8}
                            pb="4"
                            h="15vh"
                            >
                                <Text>
                                    BBBB
                                </Text>
                            </Box>
                        </SimpleGrid>
                        <SimpleGrid flex="1" gap="4" minChildWidth="400px" alignItems="flex-star" mt="1rem">
                            <Box 
                                p="8"
                                bg="gray.50"
                                borderRadius={8}
                                pb="4"
                                minW="400px"
                            >
                                <Text
                                    fontSize="lg"
                                    mb="4"
                                >

                                <Chart options={options} series={series} type="area" />

                                </Text>
                                
                            </Box>
                            <Box 
                                p="8"
                                bg="gray.50"
                                borderRadius={8}
                                pb="4"
                                minW="400px"
                                minH="300px"
                            >
                                <Text
                                    fontSize="lg"
                                    mb="4"
                                >

                                <Chart options={options} series={series} type="area"/>

                                </Text>
                                
                            </Box>
                            
                        </SimpleGrid>
                    </Flex>
                    
                </Flex>
            </Flex>
            <Footer2/>  
        </Flex>
        

      
    )
  }
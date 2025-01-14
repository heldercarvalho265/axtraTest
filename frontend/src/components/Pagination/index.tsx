import { Button, Stack, Box } from "@chakra-ui/react";


export function Pagination(){
    return(
        <Stack
            direction="row"
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>

            <Stack
                direction="row"
                spacing="2"
            >
                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    colorScheme="orange"
                    disabled
                    _disabled ={
                        {
                            bg: 'orange',
                            cursor: 'default',
                        }
                    }
                >
                    1
                </Button>
                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    _hover ={
                        {
                            bg: 'gray.500'
                        }
                    }
                >
                    2
                </Button>
                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    _hover ={
                        {
                            bg: 'gray.500'
                        }
                    }
                >
                    3
                </Button>
                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    _hover ={
                        {
                            bg: 'gray.500'
                        }
                    }
                >
                    4
                </Button>
                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    _hover ={
                        {
                            bg: 'gray.500'
                        }
                    }
                >
                    5
                </Button>
                <Button
                    size="sm"
                    fontSize="xs"
                    width="4"
                    _hover ={
                        {
                            bg: 'gray.500'
                        }
                    }
                >
                    6
                </Button>
            </Stack>
        </Stack>
    )
}
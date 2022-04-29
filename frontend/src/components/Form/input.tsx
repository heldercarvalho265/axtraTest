import { FormControl,FormLabel, Input as ChakraInput ,InputProps as ChakraInputProps} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps{
    name:string
    label?:string
}

export function Input({name, label, ...rest}:InputProps){
   return(
    <FormControl>
        {!! label && <FormLabel htmlFor='email'>Email address</FormLabel>}
        <ChakraInput
          name={name}
          id={name}
          bg="gray.50"
          variant="filled"
          size="lg" 
          {...rest}
          
          />
    </FormControl>
   )
}
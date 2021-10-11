import { Input as ChackraInput, FormControl, FormLabel, InputProps as ChackraInputProps } from '@chakra-ui/react'

interface InputProps extends ChackraInputProps {
    label: string
    name: string
}

export default function Input({ label, name, ...rest }: InputProps) {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChackraInput
                type="email"
                name={name}
                focusBorderColor='pink.500'
                bgColor='gray.900'
                w={324}
                variant='filled'
                _hover={{
                    bgColor: 'gray.900'
                }}
                size='lg'
                {...rest}
            />
        </FormControl>
    )
}
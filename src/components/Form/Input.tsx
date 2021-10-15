import { Input as ChackraInput, FormControl, FormLabel, InputProps as ChackraInputProps, FormErrorMessage } from '@chakra-ui/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'

interface InputProps extends ChackraInputProps {
    label: string
    name: string
    error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ error, label, name, ...rest }, ref) => {

    console.log(error)

    return (
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChackraInput
                id={name}
                name={name}
                focusBorderColor='pink.500'
                bgColor='gray.900'
                w={324}
                variant='filled'
                _hover={{
                    bgColor: 'gray.900'
                }}
                size='lg'
                ref={ref}
                {...rest}
            />
            {!!error && (<FormErrorMessage>{error.message}</FormErrorMessage>)}
        </FormControl>
    )
}

export const Input = forwardRef(InputBase)
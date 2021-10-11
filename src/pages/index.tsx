import { Flex, Button, Stack } from '@chakra-ui/react'
import Input from '../components/Form/Input'

export default function SignIn() {
    return (
        <Flex
            w='100vw'
            h='100vh'
            justify='center'
            align='center'
        >
            <Flex
                as='form'
                width='100%'
                maxWidth={360}
                bg='gray.800'
                p='8'
                borderRadius={8}
                flexDirection='column'
            >
                <Stack spacing={4}>
                    <Input name='email' label='Email' type='email' />
                    <Input name='password' label='Password' type='password' />
                </Stack>
                <Button
                    mt='6'
                    size='lg'
                    border='none'
                    bg='pink.500'
                    focusBorderColor='pink.500'
                    _hover={{ cursor: 'pointer' }}
                >
                    Entrar
                </Button>
            </Flex>
        </Flex>
    )
}
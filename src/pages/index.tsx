import { Flex, Button, Stack } from '@chakra-ui/react'
import {Input} from '../components/Form/Input'
import {SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {useRouter} from 'next/router'

type SignInFormData = {
    email: string;
    password: string
}

const signFormSchema = yup.object().shape({
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Password obrigatório')
})

export default function SignIn() {

    const router = useRouter()

    const {register, handleSubmit, formState} = useForm<SignInFormData>({
        resolver: yupResolver(signFormSchema)
    })

    const handleSignIn : SubmitHandler<SignInFormData> = async () => {
        await new Promise(resolve => setTimeout(resolve, 800))
        router.push('/dashboard')
    }

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
                p='4'
                borderRadius={8}
                flexDirection='column'
                onSubmit={handleSubmit(handleSignIn)}
                >
                <Stack spacing={4}>
                    <Input
                      name='email'
                      label='Email'
                      type='email'
                      error={formState.errors.email}
                      {...register('email')}
                      />
                    <Input
                      name='password'
                      label='Password'
                      error={formState.errors.password}
                      type='password'
                      {...register('password')}
                    />
                </Stack>
                <Button
                    mt='6'
                    size='lg'
                    border='none'
                    bg='pink.500'
                    focusBorderColor='pink.500'
                    _hover={{ cursor: 'pointer' }}
                    type='submit'
                    isLoading={formState.isSubmitting}
                >
                    Entrar
                </Button>
            </Flex>
        </Flex>
    )
}
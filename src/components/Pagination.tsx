import { Box, Button, Stack } from "@chakra-ui/react";
import React from "react";

export default function Pagination(){
    return(
        <Stack
            direction='row'
            mt='8'
            justify='space-between'
            aling='center'
            spacing='6'
        >
            <Box>
                <strong>0</strong>
                <strong> - </strong>
                <strong>de </strong>
                <strong>100</strong>
            </Box>
          <Stack direction='row'>
          <Button 
                size='sm'
                fontSize='xs'
                border='none'
                width='4'
                colorScheme='pink'
                disabled
                _disabled={{
                    bgColor: 'pink.500',
                    cursor: 'default'
                }}
            >
                1
            </Button>
            <Button 
                size='sm'
                fontSize='xs'
                border='none'
                width='4'
                colorScheme='blackAlpha'
                hover={{
                    bgColor: 'gray.500'
                }}
            >
                2
            </Button>
            <Button 
                size='sm'
                fontSize='xs'
                border='none'
                width='4'
                colorScheme='blackAlpha'
                hover={{
                    bgColor: 'gray.500'
                }}
            >
                3
            </Button>
            <Button 
                size='sm'
                fontSize='xs'
                width='4'
                border='none'
                colorScheme='blackAlpha'
                hover={{
                    bgColor: 'gray.500'
                }}
            >
                4
            </Button>
          </Stack>
        </Stack>
    )
}
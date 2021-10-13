import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function Profile() {
    return (
        <Flex align='center'>
            <Box
                mr='4'
                textAlign='right'
            >
                <Text>Pablo Silva</Text>
                <Text color='gray.300' mt='-4'>pablolucio_@hotmail.com</Text>
            </Box>
            <Avatar size='md' name='Pablo Lício' src='https://github.com/pablolucio97.png' />
        </Flex>
    )
}
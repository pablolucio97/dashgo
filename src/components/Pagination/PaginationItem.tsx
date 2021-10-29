import { Button } from "@chakra-ui/react"
import React from "react"

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
    onPageChange: (page: number) => void;
}

export default function PaginationItem({ number, isCurrent = false, onPageChange }: PaginationItemProps) {

    if (isCurrent) {
        return (
            <Button
                size='sm'
                fontSize='xs'
                border='none'
                width='4'
                bg='pink.500'
                _disabled={{
                    bg: 'pink.500',
                    cursor: 'default'
                }}
            >
                {number}
            </Button>
        )
    }

    return (
        <Button
            size='sm'
            fontSize='xs'
            border='none'
            width='4'
            bg='gray.700'
            hover={{
                bgColor: 'gray.500'
            }}
            onClik={() => onPageChange(number)}
        >
            {number}
        </Button>
    )
}
import { Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import PaginationItem from "./PaginationItem";

interface PaginationProps {
    totalCountOfRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}



export default function Pagination({
    currentPage = 1,
    registersPerPage = 10,
    totalCountOfRegisters,
    onPageChange
}: PaginationProps) {

    const siblingsCount = 2
    const lastPage = Math.floor(totalCountOfRegisters / registersPerPage)

    function generatePagesArray(from: number, to: number) {
        return [...new Array(to - from)]
            .map((_, index) => {
                return from + index + 1
            })
            .filter(page => page > 0)
    }

    const previousPages = currentPage > 1 ?
        generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1) : []

    const nextPages = currentPage < lastPage ?
        generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage)) : []

    return (
        <Stack
            direction={['column', 'row']}
            mt='8'
            justify='space-between'
            aling='center'
            spacing='6'
        >
            <Box>
                <strong>0</strong>
                <strong> de </strong>
                <strong>100</strong>
            </Box>
            <Stack direction='row'>

                {currentPage > (1 + siblingsCount) && (
                    <>
                        <PaginationItem onPageChange={onPageChange} number={1} />
                        {currentPage > (2 + siblingsCount) && (<Text>...</Text>)}
                    </>
                )}

                {previousPages.length > 0 && previousPages.map(page => (
                    <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                ))}

                <PaginationItem onPageChange={onPageChange} number={currentPage} isCurrent />

                {nextPages.length > 0 && nextPages.map(page => (
                    <PaginationItem onPageChange={onPageChange} key={page} number={page} />
                ))}

                {currentPage + siblingsCount < lastPage && (
                    <>
                        {currentPage > (2 + siblingsCount) && (<Text>...</Text>)}
                        <PaginationItem onPageChange={onPageChange} number={lastPage} />
                    </>
                )}
            </Stack>
        </Stack>
    )
}
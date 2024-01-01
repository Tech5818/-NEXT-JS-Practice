import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";

export const Query = () => {
    const router = useRouter();

    const {id, name} = router.query;

    return(
        <>
            <Box as="p">id: {id}</Box>
            <Box as="p">name: {name}</Box>
        </>
    )
}
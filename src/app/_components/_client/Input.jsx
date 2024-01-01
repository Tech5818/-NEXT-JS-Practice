"use client";

import { useState } from "react";
import { Stack, Input } from "@chakra-ui/react";

export const Inputs = () => {
    const [text, setText] = useState("");
    return(
        <>
            <Stack spacing={1}>
                <Input 
                    placeholder="text"
                    type="text"
                    size="lg"
                    variant="flushed"
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value);
                    }}
                    w={500}
                    p={2}
                />
            </Stack>
        </>
    )
}
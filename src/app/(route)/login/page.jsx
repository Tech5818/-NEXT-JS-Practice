"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react"

export default function LoginPage() {
    const prams = useSearchParams();

    const id = prams.get("id");
    const name = prams.get("name");
    
    useEffect(() => {
        console.log(id);

    }, [])
    
    return (
        <>
            login
            <p>{name}</p>
            <p>{id}</p>
        </>
    )
}
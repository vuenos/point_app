"use client";

import { useEffect } from "react";

export default function TestApi() {
    useEffect(() => {
        fetch("/api/users/regist", {
            method: "POST"
        })
    }, []);

    return (
        <h1>Some Content</h1>
    )
}
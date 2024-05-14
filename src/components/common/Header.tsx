"use client";
import { useState } from "react"

export default function Header() {
    const [name, setName] = useState<string>("User");

    return (
        <div>
            <h1>Header {name}</h1>
        </div>
    )
}
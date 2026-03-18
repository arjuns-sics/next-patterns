"use client"
export default function LoginError({
    error
}) {
    return (
        <p>{JSON.stringify (error)}</p>
    )
}
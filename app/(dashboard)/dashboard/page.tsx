'use client'

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

function page() {

    const { data: session, status } = useSession();

    // loading state
    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (!session) {
        redirect("/");
    }
    return (
        <div>Dashboard</div>
    )
}

export default page
'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import ProtectedRouter from '../../components/ProtectedRoute.jsx';

export default function AdminMain() {
    const router = useRouter();

    return (
        <ProtectedRouter>
<div>
            <h1>Welcome to Admin Main Page</h1>
            {/* Add your admin content here */}
        </div>
        </ProtectedRouter>
        
    );
}

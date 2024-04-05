'use client'
// pages/admin/login.js

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        // Perform client-side authentication logic here
        // For example, you might check if username and password are not empty
        if (username === "admin" && password === "admin") {
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('loginTime', Date.now());

            router.push('/admin/main');
        } else {
            setError('Username and password are required');
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4">
                    <h2 className="text-2xl font-bold text-center mb-2">Admin Login</h2>

                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="username" className="block">Username</label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Enter your username"
                                className="input input-bordered w-full"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <label htmlFor="password" className="block">Password</label>
                            </div>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="text-red-500">{error}</p>}
                        <div className="flex justify-center">
                            <button className="btn" onClick={handleLogin}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

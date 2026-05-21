"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
    const handleLogout = async () => {
        // Clear session
        await signOut({
            redirect: false,
        });

        // Replace current history entry
        window.history.replaceState(null, "", "/admin");

        // Force navigation
        window.location.href = "/admin";
    };
    return (

        <button
            onClick={handleLogout}
            className="
    flex items-center gap-2
    text-red-600 font-medium
    px-4 py-2.5
    rounded-lg
    cursor-pointer
    transition-all duration-200
    active:scale-[0.98]
  "
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-7.5A2.25 2.25 0 003.75 5.25v13.5A2.25 2.25 0 006 21h7.5a2.25 2.25 0 002.25-2.25V15m3-3l-3-3m3 3l-3 3m3-3H9"
                />
            </svg>

            Logout
        </button>
    );
}
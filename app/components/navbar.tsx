"use client"

import Link from "next/link"
import { useState } from "react"
import { FaBars, FaShoppingCart } from 'react-icons/fa'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="flex justify-between items-center bg-gray-100 p-5">
            <div className="flex items-center gap-8">
                <button className="md:hidden mr-4" onClick={() => setIsOpen(!isOpen)}>
                    <FaBars size={24}/>
                </button>
                <div className="pr-4">
                    <h1 className="text-2xl md:text-3xl font-bold tracking-tight">crescentia</h1>
                </div>
                <nav className={`nav-links absolute md:static top-16 left-0 w-full md:w-auto bg-gray-100 md:bg-transparent 
                    ${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row md:items-center md:space-x-8 p-4 md:p-0`}>
                    <Link href="/" className="text-lg hover:text-green-600">Home</Link>
                    <Link href="/products" className="text-lg hover:text-green-600">Products</Link>
                    <Link href="/about" className="text-lg hover:text-green-600">About Us</Link>
                </nav>
            </div>
            <div className="flex items-center gap-4">
                <Link href="/about" passHref>
                    <button className="text-sm md:text-lg px-4 md:px-8 py-1 md:py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                        Sign In
                    </button>
                </Link>
                <Link href="/about" passHref>
                    <button className="hidden md:flex text-lg px-6 py-2 border rounded-lg border-black">
                        Cart
                    </button>
                    <button className="md:hidden p-2 border rounded-lg border-black">
                        <FaShoppingCart size={20} />
                    </button>
                </Link>
            </div>
        </div>
    )
}
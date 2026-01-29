import { CreditCard, LogOut, MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const { user, logout } = useAuth();


    return (
        <>
            <motion.nav className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                <Link to='/'>
                    <img src='/logo.svg' alt="logo" className="h-8.5 w-auto" /></Link>

                <div className="hidden md:flex items-center gap-8 transition duration-500">
                    <Link to="/" className="hover:text-pink-500 transition">Home</Link>
                    <Link to="/generate" className="hover:text-pink-500 transition">Generate</Link>
                    <Link to="/my-generation" className="hover:text-pink-500 transition">My Generation</Link>
                    <Link to="/about" className="hover:text-pink-500 transition">About</Link>
                </div>

                {user ? (
                    <div className="relative hidden md:block">
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-zinc-800 text-white font-semibold border border-white/10 hover:border-pink-500/50 transition"
                        >
                            {user.name?.[0]?.toUpperCase()}
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute right-0 top-full mt-2 w-64 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-xl overflow-hidden z-50">
                                <div className="p-4 border-b border-white/10 bg-white/5">
                                    <p className="text-sm font-medium text-white truncate">{user.name}</p>
                                    <p className="text-xs text-zinc-400 truncate">{user.email}</p>
                                </div>
                                <div className="p-2 space-y-1">
                                    <div className="flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5 rounded-lg transition cursor-default">
                                        <CreditCard className="size-4 text-pink-500" />
                                        <span>$ {user.credit || 10} Credit</span>
                                    </div>
                                    <button
                                        onClick={() => {
                                            logout();
                                            setIsDropdownOpen(false);
                                        }}
                                        className="w-full flex items-center gap-3 px-3 py-2.5 text-sm text-zinc-300 hover:bg-white/5 hover:text-red-400 rounded-lg transition cursor-pointer"
                                    >
                                        <LogOut className="size-4" />
                                        <span>Logout</span>
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <button onClick={() => navigate('/login')} className="hidden md:block px-6 py-2.5 bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all rounded-full">
                        Get Started
                    </button>
                )}

                <button onClick={() => setIsOpen(true)} className="md:hidden">
                    {user ? (
                        <div className="w-10 h-10 rounded-full bg-zinc-800 text-white font-semibold border border-white/10 flex items-center justify-center">
                            {user.name?.[0]?.toUpperCase()}
                        </div>
                    ) : (
                        <MenuIcon size={26} />
                    )}
                </button>
            </motion.nav>

            <div className={`fixed inset-0 z-100 bg-black/40 backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-400 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <Link onClick={() => setIsOpen(false)} to='/'>Home</Link>
                <Link onClick={() => setIsOpen(false)} to="/generate" >Generate</Link>
                <Link onClick={() => setIsOpen(false)} to="/my-generation" >My Generation</Link>
                <Link onClick={() => setIsOpen(false)} to="/about" >About</Link>
                {user ? (
                    <div className="flex flex-col items-center gap-4 w-full">
                        <div className="flex flex-col items-center gap-1">
                            <div className="w-12 h-12 rounded-full bg-zinc-800 text-white font-semibold border border-white/10 flex items-center justify-center text-lg mb-2">
                                {user.name?.[0]?.toUpperCase()}
                            </div>
                            <p className="text-white font-medium">{user.name}</p>
                            <p className="text-sm text-zinc-400">{user.email}</p>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-zinc-300 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                            <CreditCard className="size-4 text-pink-500" />
                            <span>$ {user.credit || 10} Credit</span>
                        </div>
                        <button
                            onClick={() => { logout(); setIsOpen(false) }}
                            className="flex items-center gap-2 text-red-400 hover:text-red-300 transition mt-2"
                        >
                            <LogOut className="size-4" />
                            <span>Logout</span>
                        </button>
                    </div>
                ) : (
                    <Link onClick={() => setIsOpen(false)} to="/login">Login</Link>
                )}

                <button onClick={() => setIsOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-pink-600 hover:bg-pink-700 transition text-white rounded-md flex">
                    <XIcon />
                </button>
            </div>
        </>
    );
}

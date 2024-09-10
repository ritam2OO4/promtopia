"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

function Nav() {
    const [providers, setProviders] = useState(null);
    const isUserLoggedIN = true; // Assuming this value will be dynamic based on authentication state
    const [toggleDropdown, settoggleDropdown] = useState(false)
    useEffect(() => {
        const fetchProviders = async () => {
            const response = await getProviders();
            setProviders(response);
        };
        fetchProviders();
    }, []);

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image
                    src="/assets/images/logo.svg"
                    alt="Promtopia Logo"
                    width={30}
                    height={30}
                    className="object-contain"
                />
                <p className="logo_text">Promtopia</p>
            </Link>

            {/* Desktop Navigation */}
            <div className="small_screen"> {/* Hidden on small screens, visible on medium and larger */}
                {
                    isUserLoggedIN ? (
                        <div className="flex gap-3 md:gap-5">
                            <Link href='/create-prompt' className="black_btn">
                                Create Post
                            </Link>
                            <button onClick={signOut} className="outline_btn">
                                Sign Out
                            </button>
                            <Link href='/profile'>
                                <Image
                                    src='/assets/images/logo.svg'
                                    width={37}
                                    height={37}
                                    className="rounded-full"
                                    alt="profile"
                                />
                            </Link>
                        </div>
                    ) : (
                        <>
                            {
                                providers &&
                                Object.values(providers).map((provider) => (
                                    <button
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                        className="black_btn"
                                    >
                                        Sign in with {provider.name}
                                    </button>
                                ))
                            }
                        </>
                    )
                }
            </div>
            <div className="sm:hidden flex relative ">
                {isUserLoggedIN ?
                    <>
                        <Image
                            src='/assets/images/logo.svg'
                            width={37}
                            height={37}
                            className="rounded-full"
                            alt="profile"
                            onClick={() => settoggleDropdown((prev) => !prev)}
                        />
                        {
                            toggleDropdown && (
                                <div className="dropdown">
                                    <Link href="/profile"
                                        className="dropdown_link"
                                        onClick={() => settoggleDropdown(false)}
                                    >
                                        My Profile
                                    </Link>
                                    <Link href="/create-prompt"
                                        className="dropdown_link"
                                        onClick={() => settoggleDropdown(false)}
                                    >
                                        create prompt
                                    </Link>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            settoggleDropdown(false);
                                            signOut();
                                        }}
                                        className="mt-5 w-full black_btn"
                                    >
                                        sign Out
                                    </button>
                                </div>
                            )
                        }
                    </> : <>
                        {
                            providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    key={provider.name}
                                    onClick={() => signIn(provider.id)}
                                    className="black_btn"
                                >
                                    Sign in with {provider.name}
                                </button>
                            ))
                        }
                    </>
                }
            </div>
        </nav>
    );
}

export default Nav;

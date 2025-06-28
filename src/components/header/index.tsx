import React from 'react';
import Image from 'next/image';

//@ds
import { Button } from '@/designer-system/components/global';

//components
import NavLinks from './nav-links';
import MobileMenu from './mobile-menu';

//images
import LogoStudio from '@/assets/logo.png';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto flex items-center justify-between h-20 px-4">
                <div className="flex items-center">
                    <Image
                        src={LogoStudio}
                        alt="Studio Paulo Santos"
                        width={150}
                        height={150}
                        quality={100}
                    />
                </div>
                <nav className="flex items-center justify-center gap-8">
                    <NavLinks />
                </nav>
                <Button
                    variant="destructive"
                    className="hidden md:flex !rounded-button whitespace-nowrap cursor-pointer"
                >
                    Agende Seu Ensaio
                </Button>
                <MobileMenu />
            </div>
        </header>
    );
};

export default Header;

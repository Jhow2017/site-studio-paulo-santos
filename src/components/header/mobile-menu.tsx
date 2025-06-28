'use client';

import React, { useState } from 'react';

//@ds
import { Button } from '@/designer-system/components/global';

//components
import NavLinks from './nav-links';

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div
                className="md:hidden cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <i
                    className={`fas ${
                        isOpen ? 'fa-times' : 'fa-bars'
                    } text-2xl text-white`}
                ></i>
            </div>
            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-md absolute w-full py-4 border-b border-white/10">
                    <div className="container mx-auto px-4 flex flex-col space-y-4">
                        <NavLinks className="py-2" showUnderline={false} />
                        <Button
                            variant="destructive"
                            className="!rounded-button whitespace-nowrap cursor-pointer"
                        >
                            Agende Seu Ensaio
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileMenu;

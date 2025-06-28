import React from 'react';

interface NavLinksProps {
    className?: string;
    showUnderline?: boolean;
}

const NavLinks = ({ className = '', showUnderline = true }: NavLinksProps) => {
    const links = [
        { href: '#inicio', label: 'Início' },
        { href: '#portfolio', label: 'Portfólio' },
        { href: '#servicos', label: 'Serviços' },
        { href: '#sobre', label: 'Sobre' },
        { href: '#contato', label: 'Contato' },
    ];

    return (
        <>
            {links.map((link) => (
                <a
                    key={link.href}
                    href={link.href}
                    className={`text-white hover:text-red-600 transition-all duration-300 px-4 py-2 relative group ${className}`}
                >
                    {link.label}
                    {showUnderline && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    )}
                </a>
            ))}
        </>
    );
};

export default NavLinks;

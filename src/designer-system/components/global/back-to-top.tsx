import React from 'react';

export const BackToTop: React.FC = () => {
    return (
        <a
            href="#inicio"
            className="fixed bottom-6 right-6 w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors duration-300 cursor-pointer"
        >
            <i className="fas fa-arrow-up text-white"></i>
        </a>
    );
};

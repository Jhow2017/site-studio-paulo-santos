'use client';

import React from 'react';

const Copyright = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    return (
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Studio Paulo Santos. Todos os direitos
            reservados.
        </p>
    );
};

export default Copyright;

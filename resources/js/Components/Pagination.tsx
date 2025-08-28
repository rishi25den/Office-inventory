// resources/js/Components/Pagination.tsx

import React from 'react';
import { Link } from '@inertiajs/react';

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginationProps {
    links: PaginationLink[];
}

const Pagination: React.FC<PaginationProps> = ({ links }) => {
    return (
        <nav className="flex items-center space-x-2 mt-4">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.url ?? ''}
                    className={`px-3 py-1 border rounded text-sm dark:border-gray-700 ${
                        link.active ? 'bg-blue-500 text-white' : 'text-gray-700 dark:text-gray-400 dark:hover:text-white hover:text-white hover:bg-blue-800'
                    } ${!link.url ? 'opacity-50 pointer-events-none' : ''}`}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                />
            ))}
        </nav>
    );
};

export default Pagination;
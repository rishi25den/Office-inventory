import { useState, useRef, useEffect } from "react";

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    id?: string;
    name?: string;
    options: Option[];
    placeholder?: string;
    onChange: (value: string) => void;
    className?: string;
    defaultValue?: string;
    size?: "sm" | "md" | "lg";
}

const SearchableSelect: React.FC<SelectProps> = ({
    id,
    name,
    options,
    placeholder = "Select an option",
    onChange,
    className = "",
    defaultValue = "",
    size = "lg", // default size
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState<Option | null>(
        options.find((opt) => opt.value === defaultValue) || null
    );
    const containerRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicked outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option: Option) => {
        setSelected(option);
        onChange(option.value);
        setIsOpen(false);
        setSearch(""); // reset search after select
    };

    const filteredOptions = options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase())
    );

    // 👇 Tailwind size presets
    const sizeClasses = {
        sm: "h-6 px-1 py-0 text-xs",
        md: "h-9 px-3 py-1 text-sm",
        lg: "h-11 px-4 py-2.5 text-sm",
    };

    return (
        <div className={`relative ${className}`} ref={containerRef}>
            {/* Selected Value */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={`h-11 w-full flex items-center justify-between rounded-lg border border-gray-300 px-4 text-sm cursor-pointer shadow-sm 
          ${selected ? "text-gray-800 dark:text-white" : "text-gray-400"} ${
                    sizeClasses[size]
                }
          dark:border-gray-700 dark:bg-gray-900`}
            >
                <span>{selected ? selected.label : placeholder}</span>
                <span className="ml-2">▾</span>
            </div>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute mt-1 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg z-50">
                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full px-3 py-2 text-sm border-b border-gray-200 dark:border-gray-700 focus:outline-none dark:bg-gray-800"
                    />

                    {/* Options */}
                    <ul className="max-h-48 overflow-y-auto">
                        {filteredOptions.length > 0 ? (
                            filteredOptions.map((option) => (
                                <li
                                    key={option.value}
                                    onClick={() => handleSelect(option)}
                                    className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    {option.label}
                                </li>
                            ))
                        ) : (
                            <li className="px-3 py-2 text-sm text-gray-400">
                                No results found
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SearchableSelect;

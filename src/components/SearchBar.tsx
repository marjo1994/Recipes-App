import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { SearchResults } from './SearchResults';
import { useDebounce } from '../hooks';
//import { debounce } from '../utils/debounce';


export const SearchBar = () => {
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounce(search);

    return (
    <div>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
            </div>	
            <input
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search your favorite recipe"
                type="search"
                value={search}
                onChange={(e) => {
                    console.log("Search value", e.currentTarget.value)
                    setSearch(e.currentTarget.value)
                }}
            />
        </div>
        {search && (
            <ul className="max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-md">
                <SearchResults search={debouncedSearch} /> 
            </ul>
        )}
    </div>
    )

}
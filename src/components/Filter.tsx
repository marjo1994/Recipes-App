import { useState } from "react"
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';

export const Filter = () => {
    const [search, setSearch] = useState('')

    return (
        <div>
            <h2 className="text-xl mb-2">Filter</h2>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>	
        		<input
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					placeholder="Filter recipes..."
					type="search"
					value={search}
					onChange={(event) => {
						setSearch(event.currentTarget.value)
					}}
				/>
			</div>
            <div>
                    
            </div> 
        </div>
    )
}


import { Search } from 'lucide-react'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { PAGE } from '@/config/public-page.config'

interface Props {}

function SearchField({}: Props) {
	const [searchTerm, setSearchTerm] = useState('')
	const router = useRouter()

	const handleEnterKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key !== 'Enter') return
		e.preventDefault()
		if (searchTerm.trim() !== '') {
			router.push(PAGE.SEARCH(searchTerm))
		}
	}

	return (
		<div className='w-1/3 flex items-center'>
			<Search
				size={22}
				onClick={() => router.push(PAGE.SEARCH(searchTerm))}
			/>
			<input
				type='search'
				placeholder='Type to search video'
				className='py-2 px-4 w-full outline-none border-none shadow-none focus:outline-none'
				value={searchTerm}
				onChange={e => setSearchTerm(e.target.value)}
				onKeyDown={handleEnterKeyDown}
			/>
		</div>
	)
}

export default SearchField

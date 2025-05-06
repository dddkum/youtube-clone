import { Search } from 'lucide-react'

interface Props {}

function SearchField({}: Props) {
	return (
		<div className='w-1/3 flex items-center'>
			<Search size={22}/>
			<input
				type='search'
				placeholder='Type to search video'
				className='py-2 px-4 w-full outline-none border-none shadow-none focus:outline-none'
			/>
		</div>
	)
}

export default SearchField

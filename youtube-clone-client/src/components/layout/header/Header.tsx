import SearchField from '@/components/layout/header/SearchField'
import HeaderProfile from '@/components/layout/header/profile/HeaderProfile'
import HeaderLinks from '@/components/layout/header/HeaderLinks'

export function Header() {
	return (
		<header className='p-layout border-border border-b flex items-center justify-between'>
			<SearchField />
			<div className='flex items-center gap-10'>
				<HeaderLinks />
				<HeaderProfile />
			</div>
		</header>
	)
}

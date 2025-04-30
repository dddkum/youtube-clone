import { Menu, Tv } from 'lucide-react'

export function SidebarHeader() {
	return (
		<>
			<button>
				<Menu />
			</button>
			<span>
				<Tv />
				<span>Video</span>
			</span>
		</>
	)
}

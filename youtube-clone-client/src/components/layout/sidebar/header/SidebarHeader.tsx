import { CirclePlay, Menu } from 'lucide-react'
import { COLORS } from '@/constants/colors.const'
import Link from 'next/link'
import { PUBLIC_PAGE_CONFIG } from '@/config/public-page.config'

export function SidebarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
	return (
		<div className='flex items-center gap-5 mb-12'>
			<button
				className='opacity-85 hover:opacity-100 transition-opacity cursor-pointer'
				onClick={toggleSidebar}
			>
				<Menu />
			</button>
			<Link
				href={PUBLIC_PAGE_CONFIG.HOME}
				className='flex items-center gap-1.5'
			>
				<CirclePlay
					color={COLORS.primary}
					size={28}
				/>
				<span className='font-medium text-xl'>VidddeoME</span>
			</Link>
		</div>
	)
}

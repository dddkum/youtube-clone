import Link from 'next/link'
import { STUDIO_PAGE } from '@/config/studio-page.config'
import { Bell, LayoutGrid, PlusSquare } from 'lucide-react'

export default function HeaderLinks() {
	return (
		<div className='flex items-center gap-5'>
			<Link
				href={STUDIO_PAGE.UPLOAD_VIDEO}
				className='hover:text-primary transition hover:rotate-6 opacity-75 hover:opacity-100'
			>
				<PlusSquare />
			</Link>
			<Link
				href={STUDIO_PAGE.HOME}
				className='hover:text-primary transition hover:rotate-6 opacity-75 hover:opacity-100'
			>
				<LayoutGrid />
			</Link>
			<Link
				href={STUDIO_PAGE.HOME}
				className='hover:text-primary transition hover:rotate-6 opacity-75 hover:opacity-100'
			>
				<Bell />
			</Link>
		</div>
	)
}

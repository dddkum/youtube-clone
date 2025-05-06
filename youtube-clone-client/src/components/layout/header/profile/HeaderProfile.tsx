import Link from 'next/link'
import { STUDIO_PAGE } from '@/config/studio-page.config'
import Image from 'next/image'

export default function HeaderProfile() {
	return (
		<Link href={STUDIO_PAGE.SETTINGS} className='shrink-0'>
			<Image
				src='/uploads/avatars/spawn.jpg'
				alt=''
				width={40}
				height={40}
				className='rounded-xl'
				loading='lazy'
			/>
		</Link>
	)
}

import { PAGE } from '@/config/public-page.config'
import { CirclePlay } from 'lucide-react'
import { COLORS } from '@/constants/colors.const'
import Link from 'next/link'

export default function Logo() {
	return (
		<Link
			href={PAGE.HOME}
			className='inline-flex items-center gap-1.5'
		>
			<CirclePlay
				color={COLORS.primary}
				size={28}
			/>
			<span className='font-medium text-xl'>VidddeoME</span>
		</Link>
	)
}

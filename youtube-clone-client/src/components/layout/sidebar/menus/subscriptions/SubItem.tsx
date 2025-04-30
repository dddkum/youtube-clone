import type { ISidebarSubscriptions } from '@/components/layout/sidebar/sidebar.types'
import Link from 'next/link'
import { Dot, Radio } from 'lucide-react'
import Image from 'next/image'

interface Props {
	item: ISidebarSubscriptions
}

export function SubItem({ item }: Props) {
	return (
		<li>
			<Link href={item.link}>
				{item.avatar && (
					<Image
						src={item.avatar}
						alt='avatar'
						width={30}
						height={30}
					/>
				)}
				<span>
					<span>{item.label}</span>
					{item.isLive && <Radio />}
					{item.isNewVideo && <Dot />}
				</span>
			</Link>
		</li>
	)
}

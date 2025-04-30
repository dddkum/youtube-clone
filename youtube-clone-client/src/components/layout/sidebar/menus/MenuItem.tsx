import type { ISidebarItem } from '@/components/layout/sidebar/sidebar.types'
import Link from 'next/link'

interface Props {
	item: ISidebarItem
}

export function MenuItem({ item }: Props) {
	return (
		<li>
			<Link href={item.link}>
				<item.icon />
				<span>{item.label}</span>
			</Link>
		</li>
	)
}

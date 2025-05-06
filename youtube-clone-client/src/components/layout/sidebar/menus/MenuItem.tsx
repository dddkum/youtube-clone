import type { ISidebarItem } from '@/components/layout/sidebar/sidebar.types'
import Link from 'next/link'
import cn from 'clsx'

interface Props {
	item: ISidebarItem
	isActive: boolean
}

export function MenuItem({ item, isActive }: Props) {
	return (
		<li>
			<Link
				href={item.link}
				className='group py-3 flex items-center gap-5'
			>
				<item.icon
					className={cn('group-hover:text-primary transition group-hover:rotate-6 min-w-6', {
						'text-primary': isActive
					})}
				/>
				<span
					className={cn('border-b border-transparent', {
						'border-white': isActive
					})}
				>
					{item.label}
				</span>
			</Link>
			{item.isBottomBorder && <span className='h-[1px] bg-border my-5 w-full block' />}
		</li>
	)
}

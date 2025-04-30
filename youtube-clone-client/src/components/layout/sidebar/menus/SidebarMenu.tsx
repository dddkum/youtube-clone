import { MenuItem } from '@/components/layout/sidebar/menus/MenuItem'
import type { ISidebarItem } from '@/components/layout/sidebar/sidebar.types'

interface Props {
	menu: ISidebarItem[]
	title?: string
}

export function SidebarMenu({ menu, title }: Props) {
	return (
		<nav>
			{title && <div>{title}</div>}
			<ul>
				{menu.map(item => (
					<MenuItem
						item={item}
						key={item.label}
					/>
				))}
			</ul>
		</nav>
	)
}

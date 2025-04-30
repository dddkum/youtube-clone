import type { LucideIcon } from 'lucide-react'

export interface ISidebarItem {
	icon: LucideIcon
	label: string
	link: string
	isBottomBorder?: boolean
}

export interface ISidebarSubscriptions {
	avatar: string
	label: string
	link: string
	isLive?: boolean
	isNewVideo?: boolean
}

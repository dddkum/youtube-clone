import {
	CircleAlert,
	CirclePlay,
	Compass,
	Flame,
	FolderHeart,
	Gamepad2,
	History,
	Settings,
	TvMinimalPlay
} from 'lucide-react'
import type { ISidebarItem } from '@/components/layout/sidebar/sidebar.types'
import { PUBLIC_PAGE_CONFIG } from '@/config/public-page.config'

export const SIDEBAR_DATA: ISidebarItem[] = [
	{
		icon: Compass,
		label: 'Explore',
		link: PUBLIC_PAGE_CONFIG.HOME
	},
	{
		icon: Flame,
		label: 'Trending',
		link: PUBLIC_PAGE_CONFIG.TRENDING
	},
	{
		icon: Gamepad2,
		label: 'Video games',
		link: PUBLIC_PAGE_CONFIG.VIDEO_GAMES,
		isBottomBorder: true
	},
	{
		icon: TvMinimalPlay,
		label: 'My Channel',
		link: PUBLIC_PAGE_CONFIG.MY_CHANNEL
	},
	{
		icon: CirclePlay,
		label: 'Subscriptions',
		link: PUBLIC_PAGE_CONFIG.SUBSCRIPTION
	},
	{
		icon: History,
		label: 'History',
		link: PUBLIC_PAGE_CONFIG.HISTORY
	},
	{
		icon: FolderHeart,
		label: 'Liked videos',
		link: PUBLIC_PAGE_CONFIG.LIKED_VIDEOS
	}
]

export const ADDITIONAL_SIDEBAR_DATA: ISidebarItem[] = [
	{
		icon: Settings,
		label: 'Settings',
		link: PUBLIC_PAGE_CONFIG.SETTINGS
	},
	{
		icon: CircleAlert,
		label: 'Send feedback',
		link: PUBLIC_PAGE_CONFIG.SEND_FEEDBACK
	}
]

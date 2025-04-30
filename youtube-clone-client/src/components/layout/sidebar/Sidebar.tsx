import { SidebarHeader } from '@/components/layout/sidebar/header/SidebarHeader'
import { SidebarMenu } from '@/components/layout/sidebar/menus/SidebarMenu'
import { ADDITIONAL_SIDEBAR_DATA, SIDEBAR_DATA } from '@/components/layout/sidebar/sidebar.data'
import { SidebarSubscriptions } from '@/components/layout/sidebar/menus/subscriptions/SidebarSubscriptions'

export function Sidebar() {
	return (
		<aside>
			<SidebarHeader />
			<SidebarMenu menu={SIDEBAR_DATA} />
			<SidebarSubscriptions />
			<SidebarMenu menu={ADDITIONAL_SIDEBAR_DATA} />
		</aside>
	)
}

'use client'

import { type PropsWithChildren, useState } from 'react'
import { Sidebar } from '@/components/layout/sidebar/Sidebar'
import Content from '@/components/layout/content/Content'
import cn from 'clsx'
import styles from './Layout.module.scss'

export function Layout({ children }: PropsWithChildren<unknown>) {
	const [sidebarShown, setSidebarShown] = useState(true)

	const toggleSidebar = () => setSidebarShown(!sidebarShown)

	return (
		<main
			className={cn(
				'flex min-h-screen',
				sidebarShown ? styles.openedSidebar : styles.hiddenSidebar
			)}
		>
			<Sidebar toggleSidebar={toggleSidebar} />
			<Content>{children}</Content>
		</main>
	)
}

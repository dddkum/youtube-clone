import type { PropsWithChildren } from 'react'
import { Sidebar } from '@/components/layout/sidebar/Sidebar'
import Content from '@/components/layout/content/Content'

export function Layout({ children }: PropsWithChildren<unknown>) {
	return (
		<main>
			<Sidebar />
			<Content>{children}</Content>
		</main>
	)
}

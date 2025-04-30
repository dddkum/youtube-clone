import type { PropsWithChildren } from 'react'
import { Header } from '@/components/layout/header/Header'

export default function Content({ children }: PropsWithChildren<unknown>) {
	return (
		<div>
			<Header />
			<section>{children}</section>
		</div>
	)
}

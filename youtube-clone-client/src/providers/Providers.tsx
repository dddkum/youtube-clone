'use client'

import type { ReactNode } from 'react'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'
import { domAnimation, LazyMotion } from 'framer-motion'
import { Toaster } from 'react-hot-toast'

interface Props {
	children: ReactNode
}

const client = new QueryClient()

export function Providers({ children }: Props) {
	return (
		<QueryClientProvider client={client}>
			<LazyMotion features={domAnimation}>
				{children}
				<Toaster />
			</LazyMotion>
		</QueryClientProvider>
	)
}

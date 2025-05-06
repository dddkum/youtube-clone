'use client'

import type { ReactNode } from 'react'
import { QueryClient } from '@tanstack/query-core'
import { QueryClientProvider } from '@tanstack/react-query'

interface Props {
	children: ReactNode
}

const client = new QueryClient()

export function Providers({ children }: Props) {
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}

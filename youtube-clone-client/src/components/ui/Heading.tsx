import React, { type ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { COLORS } from '@/constants/colors.const'

interface Props {
	children: ReactNode
	Icon?: LucideIcon
	isH1?: boolean
}

export function Heading({ children, Icon, isH1 = false }: Props) {
	return (
		<div className='flex items-center gap-2 mb-5'>
			{Icon && <Icon color={COLORS.primary} />}
			{isH1 ? (
				<h1 className='font-semibold text-lg'>{children}</h1>
			) : (
				<h2 className='font-semibold text-lg'>{children}</h2>
			)}
		</div>
	)
}

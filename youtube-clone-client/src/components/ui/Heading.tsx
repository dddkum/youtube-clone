import React, { type ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'
import { COLORS } from '@/constants/colors.const'

interface Props {
	children: ReactNode
	Icon?: LucideIcon
}

export function Heading({ children, Icon }: Props) {
	return (
		<div className='flex items-center gap-2 mb-5'>
			{Icon && <Icon color={COLORS.primary} />}
			<h2 className='font-semibold text-lg'>{children}</h2>
		</div>
	)
}

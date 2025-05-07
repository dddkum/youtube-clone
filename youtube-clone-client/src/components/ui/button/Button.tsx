import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Loader } from 'lucide-react'
import * as m from 'framer-motion/m'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
	isLoading?: boolean
}

export default function Button({ children, isLoading, ...props }: Props) {
	return (
		<div>
			<button
				className='py-2 px-5 bg-primary text-white font-semibold rounded hover:bg-red-800 transition-colors disabled:bg-gray-400 cursor-pointer'
				disabled={isLoading || props.disabled}
			>
				{isLoading ? (
					<m.div
						animate={{ rotate: 360 }}
						transition={{ repeat: Infinity, duration: 2, ease: 'linear' }}
					>
						<Loader size='20' />
					</m.div>
				) : (
					children
				)}
			</button>
		</div>
	)
}

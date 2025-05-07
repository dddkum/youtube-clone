import type { InputHTMLAttributes } from 'react'
import type { UseFormRegisterReturn } from 'react-hook-form'
import cn from 'clsx'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
	error?: string
	registration: UseFormRegisterReturn
}

export default function Field({ label, error, registration, ...props }: Props) {
	return (
		<div className='mb-4'>
			<label>
				<span className='block text-gray-400 font-semibold mb-2'>{label}</span>
				<input
					className={cn(
						'w-full px-3 py-2 border rounded border-border transition-colors outline-none focus:outline-none focus:ring-0 focus:border-gray-50 bg-transparent',
						error ? 'border-red-500' : 'border-border'
					)}
					{...registration}
					{...props}
				/>
			</label>
			{error && <p className='text-primary text-sm mt-1'>{error}</p>}
		</div>
	)
}

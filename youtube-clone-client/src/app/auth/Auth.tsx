'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import cn from 'clsx'
import Field from '@/ui/field/Field'
import Button from '@/ui/button/Button'
import Logo from '@/components/layout/sidebar/header/Logo'
import type { IAuthForm } from '@/app/auth/auth-form.types'
import { useAuthForm } from '@/app/auth/useAuthForm'
import ReCAPTCHA from 'react-google-recaptcha'
import styles from './captcha.module.scss'

export default function Auth() {
	const [isLogin, setIsLogin] = useState(true)
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		reset
	} = useForm<IAuthForm>({ mode: 'onChange' })

	const password = watch('password')

	const { isLoading, onSubmit, recaptchaRef } = useAuthForm(isLogin ? 'login' : 'register', reset)

	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div className='w-1/5 p-layout border-border border rounded'>
				<div className='text-center mb-2'>
					<Logo />
				</div>
				<div className='flex justify-center mb-10'>
					<button
						type='button'
						className={cn(
							'px-4 py-2 font-semibold  cursor-pointer',
							isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-600'
						)}
						onClick={() => setIsLogin(true)}
					>
						Login
					</button>
					<button
						type='button'
						className={cn(
							'px-4 py-2 font-semibold cursor-pointer',
							!isLogin ? 'text-primary border-b-2 border-primary' : 'text-gray-600'
						)}
						onClick={() => setIsLogin(false)}
					>
						Register
					</button>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						registration={register('email', { required: 'Email is required' })}
						label='Email'
						type='email'
						error={errors.email?.message}
						placeholder='Enter Email'
					/>
					<Field
						registration={register('password', { required: 'Password is required' })}
						label='Password'
						type='password'
						error={errors.password?.message}
						placeholder='Enter Password'
					/>
					{!isLogin && (
						<Field
							registration={register('confirmPassword', {
								required: 'Confirm your password',
								validate: value => value === password || 'Passwords do not match'
							})}
							label='Confirm Password'
							type='password'
							error={errors.confirmPassword?.message}
							placeholder='Confirm you password'
						/>
					)}
					<ReCAPTCHA
						ref={recaptchaRef}
						size='normal'
						theme='light'
						className={styles.recaptcha}
						sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
					/>
					<Button
						isLoading={isLoading}
						type='submit'
					>
						{isLogin ? 'Login' : 'Register'}
					</Button>
				</form>
			</div>
		</div>
	)
}

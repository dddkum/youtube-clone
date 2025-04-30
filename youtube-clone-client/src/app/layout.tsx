import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.scss'
import { Layout } from '@/components/layout/Layout'

const ubuntu = Ubuntu({
	variable: '--font-ubuntu',
	subsets: ['latin'],
	weight: '500',
})


export const metadata: Metadata = {
	title: 'YOUTUBE',
	description: 'BEST APP FOR VIDEO WATCHING'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${ubuntu.variable} antialiased`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}

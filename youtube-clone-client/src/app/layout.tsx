import type { Metadata } from 'next'
import { SUSE } from 'next/font/google'
import './globals.scss'
import { Sidebar } from '@/components/layout/sidebar/Sidebar'
import Content from '@/components/layout/content/Content'
import { Layout } from '@/components/layout/Layout'

const SUSESans = SUSE({
	variable: '--font-geist-sans',
	subsets: ['latin']
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
			<body className={`${SUSESans.variable} antialiased`}>
				<Layout>{children}</Layout>
			</body>
		</html>
	)
}

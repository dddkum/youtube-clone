import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'
import './globals.scss'
import { Providers } from '@/providers/Providers'

const ubuntu = Ubuntu({
	variable: '--font-ubuntu',
	subsets: ['latin'],
	weight: '500'
})

export const metadata: Metadata = {
	title: {
		absolute: 'VidddeoME',
		template: `%s | VidddeoME`
	},
	description: 'Enjoy watching videos and have a good time'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${ubuntu.variable} antialiased`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}

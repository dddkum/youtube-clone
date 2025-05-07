import type { Metadata } from 'next'
import { PAGE } from '@/config/public-page.config'
import { videoService } from '@/services/video.service'
import { Heading } from '@/ui/Heading'
import { Flame, GamepadIcon } from 'lucide-react'
import { VideoItem } from '@/ui/video-item/VideoItem'

export const metadata: Metadata = {
	title: 'Games',
	description: 'Video Games',
	alternates: {
		canonical: PAGE.VIDEO_GAMES
	},
	openGraph: {
		type: 'website',
		url: PAGE.VIDEO_GAMES,
		title: 'Video Games'
	}
}

export const revalidate = 100
export const dynamic = 'force-static'

export default async function VideoGamesPage() {
	const videos = await videoService.getGamesVideos()
	return (
		<section>
			<Heading Icon={GamepadIcon}>Video Games</Heading>
			<div className='grid-4-cols'>
				{!!videos.data.length
					? videos.data.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))
					: 'Video Games are unavailable'}
			</div>
		</section>
	)
}

import type { Metadata } from 'next'
import { PAGE } from '@/config/public-page.config'
import { videoService } from '@/services/video.service'
import { Heading } from '@/ui/Heading'
import { Flame } from 'lucide-react'
import { VideoItem } from '@/ui/video-item/VideoItem'

export const metadata: Metadata = {
	title: 'Trending',
	description: 'Trending videos',
	alternates: {
		canonical: PAGE.TRENDING
	},
	openGraph: {
		type: 'website',
		url: PAGE.TRENDING,
		title: 'Trending'
	}
}

export const revalidate = 100
export const dynamic = 'force-static'

export default async function TrendingPage() {
	const videos = await videoService.getTrendingVideos()
	return (
		<section>
			<Heading Icon={Flame}>Trending videos</Heading>
			<div className='grid grid-cols-4 gap-6 mb-10'>
				{videos.data.length
					? videos.data.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))
					: 'Trending videos are unavailable'}
			</div>
		</section>
	)
}

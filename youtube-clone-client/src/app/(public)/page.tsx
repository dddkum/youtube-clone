import Explore from '@/app/(public)/explore/Explore'
import { videoService } from '@/services/video.service'
import { VideoItem } from '@/ui/video-item/VideoItem'
import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Explore',
	description: 'The best platform to share your videos',
	alternates: {
		canonical: '/'
	},
	openGraph: {
		type: 'website',
		url: '/',
		title: 'VidddeoME',
	}
}

export default async function Home() {
	const data = await videoService.getTrendingVideos()
	const trendingVideos = data.data.slice(0,4)
	return (
		<>
			<section>
				<h2>Trending videos</h2>
				<div className='grid grid-cols-4 gap-6'>
					{trendingVideos.length &&
						trendingVideos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Flame}
							/>
						))}
				</div>
			</section>
			<Explore />
		</>
	)
}

import Explore from '@/app/explore/Explore'
import { videoService } from '@/services/video.service'
import { VideoItem } from '@/ui/video-item/VideoItem'
import { Flame } from 'lucide-react'

export const revalidate = 100
export const dynamic = 'force-static'

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
								key={1}
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

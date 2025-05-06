'use client'
import { VideoItem } from '@/ui/video-item/VideoItem'
import { Target } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { videoService } from '@/services/video.service'

function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})

	return (
		<section>
			<h2>Explore new videos</h2>
			<div className='grid grid-cols-4 gap-6'>
				{isLoading
					? 'Loading...'
					: data?.data.videos.map(video => (
							<VideoItem
								key={video.id}
								video={video}
								Icon={Target}
							/>
						))}
			</div>
		</section>
	)
}

export default Explore

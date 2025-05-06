'use client'
import { VideoItem } from '@/ui/video-item/VideoItem'
import { Compass, Dot } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { videoService } from '@/services/video.service'
import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'

function Explore() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})

	return (
		<section>
			<Heading Icon={Compass}>Explore new videos</Heading>
			<div className='grid grid-cols-4 gap-6'>
				{isLoading ? (
					<SkeletonLoader
						count={4}
						className='h-55 rounded-md'
					/>
				) : (
					data?.data.videos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Dot}
						/>
					))
				)}
			</div>
		</section>
	)
}

export default Explore

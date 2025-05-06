'use client'

import { VideoItem } from '@/ui/video-item/VideoItem'
import { useQuery } from '@tanstack/react-query'
import { videoService } from '@/services/video.service'
import { Flame } from 'lucide-react'

export default function Home() {
	const { data, isLoading } = useQuery({
		queryKey: ['explore'],
		queryFn: () => videoService.getExploreVideos()
	})

	return (
		<div className='grid grid-cols-4 gap-6'>
			{isLoading
				? 'Loading...'
				: data?.data.videos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Flame}
						/>
					))}
		</div>
	)
}

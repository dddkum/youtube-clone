'use client'

import { useQuery } from '@tanstack/react-query'
import { videoService } from '@/services/video.service'
import { Heading } from '@/ui/Heading'
import { Dot, Search } from 'lucide-react'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VideoItem } from '@/ui/video-item/VideoItem'
import { useSearchParams } from 'next/navigation'

export default function SearchPage() {
	const searchParams = useSearchParams()
	const searchTerm = searchParams.get('term')

	const { data, isLoading } = useQuery({
		queryKey: ['search', searchTerm],
		queryFn: () => videoService.getSearch(searchTerm)
	})

	return (
		<section>
			<Heading
				isH1
				Icon={Search}
			>
				Search by {searchTerm}
			</Heading>
			<div className='grid grid-cols-4 gap-6'>
				{isLoading ? (
					<SkeletonLoader
						count={4}
						className='h-55 rounded-md'
					/>
				) : data?.data.videos.length ? (
					data?.data.videos.map(video => (
						<VideoItem
							key={video.id}
							video={video}
							Icon={Dot}
						/>
					))
				) : (
					`Nothing find by ${searchTerm}`
				)}
			</div>
		</section>
	)
}

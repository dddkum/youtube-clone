import type { IVideoData } from '@/types/video.types'
import Image from 'next/image'
import Link from 'next/link'
import { PAGE } from '@/config/public-page.config'
import { Check, type LucideIcon } from 'lucide-react'
import { convertViews } from '@/utils/convert-views'
import { convertDate } from '@/utils/convert-date'
import { COLORS } from '@/constants/colors.const'

interface Props {
	video: IVideoData
	Icon?: LucideIcon
}

export function VideoItem({ video, Icon }: Props) {
	return (
		<div>
			<div className='relative mb-2'>
				<Link href={PAGE.VIDEO(video.videoFileName)}>
					<Image
						src={video.thumbnailUrl}
						width={250}
						height={140}
						alt={video?.title ?? 'title'}
						className='rounded-md w-full'
					/>
				</Link>
				<Link href={PAGE.CHANNEL(video.channel.slug)}>
					<Image
						src={video.channel.avatarUrl}
						width={40}
						height={40}
						alt={video.channel.user.name ?? 'channel name'}
						className='absolute left-2 bottom-2 rounded-full shadow'
					/>
				</Link>
			</div>
			<div className='flex items-center justify-between mb-2'>
				<div className='flex items-center gap-1'>
					{Icon && (
						<Icon
							size={18}
							color={COLORS.primary}
						/>
					)}
					<span className='text-gray-400 text-sm'>{convertViews(video.viewsCount)}</span>
				</div>
				<div>
					<span className='text-gray-400 text-sm'>{convertDate(video.createdAt)}</span>
				</div>
			</div>
			<div>
				<Link href={PAGE.VIDEO(video.videoFileName)} className='line-clamp-2 leading-snug'>{video.title}</Link>
			</div>
			<div>
				<Link
					href={PAGE.CHANNEL(video.channel.slug)}
					className='flex items-center gap-1'
				>
					<span className='text-gray-400 text-sm'>{video.channel.user.name}</span>
					<span>
						<Check className='text-green-500' size={15} />
					</span>
				</Link>
			</div>
		</div>
	)
}

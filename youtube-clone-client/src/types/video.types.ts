import type { IChannel } from '@/types/channel.types'

export interface IVideo {
	videos: IVideoData[]
}
export interface IVideoData extends IVideo {
	id: string
	title: string
	slug: string
	description: string
	thumbnailUrl: string
	videoFileName: string
	viewsCount: number
	isPublic: boolean
	channel: IChannel
	createdAt: string
}

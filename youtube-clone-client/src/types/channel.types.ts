import type { IVideo } from '@/types/video.types'

export interface IChannel {
	id: string
	name: string
	description: string
	slug: string
	isVerified: boolean
	avatarUrl: string
	bannerUrl: string
	videos: IVideo[]
	subscribers: []
	createdAt: string
}

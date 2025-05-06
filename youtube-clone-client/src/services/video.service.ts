import axios from 'axios'
import type { IVideo, IVideoData } from '@/types/video.types'

class VideoService {
	getSearch(searchTerm?: string | null) {
		return axios.get<IVideoData>(
			`http://localhost:4200/api/videos/`,
			searchTerm
				? {
						params: {
							searchTerm
						}
					}
				: {}
		)
	}

	getTrendingVideos() {
		return axios.get<IVideoData[]>('http://localhost:4200/api/videos/trending')
	}

	getExploreVideos() {
		return axios.get<IVideo>('http://localhost:4200/api/videos/explore')
	}
}

export const videoService = new VideoService()

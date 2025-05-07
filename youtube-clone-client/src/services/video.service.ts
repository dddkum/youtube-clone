import type { IVideo, IVideoData } from '@/types/video.types'
import { api } from '@/api/axios'

class VideoService {
	private _VIDEOS = '/videos'

	getSearch(searchTerm?: string | null) {
		return api.get<IVideoData>(
			this._VIDEOS,
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
		return api.get<IVideoData[]>(`${this._VIDEOS}/trending`)
	}

	getExploreVideos() {
		return api.get<IVideo>(`${this._VIDEOS}/explore`)
	}
}

export const videoService = new VideoService()

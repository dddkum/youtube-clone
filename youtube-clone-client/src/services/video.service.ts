import axios from 'axios'
import type { IVideo } from '@/types/video.types'

class VideoService {
	getExploreVideos() {
		return axios.get<IVideo>('http://localhost:4200/api/videos/explore')
	}
}

export const videoService = new VideoService()

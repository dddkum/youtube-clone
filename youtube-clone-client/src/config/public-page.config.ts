class publicPageConfig {
	HOME = '/'
	TRENDING = '/trending'
	SUBSCRIPTION = '/subscription'
	HISTORY = '/history'
	LIKED_VIDEOS = '/liked_videos'
	SEND_FEEDBACK = 'send_feedback'
	VIDEO_GAMES = 'video_games'
	MY_CHANNEL = 'channel'

	VIDEO(path: string) {
		return `/v/${path}`
	}

	CHANNEL(path: string) {
		return `/c/${path}`
	}

	SEARCH(searchTerm: string) {
		return `/s?term=${searchTerm}`
	}
}

export const PAGE = new publicPageConfig()

class publicPageConfig {
	HOME = '/'
	SEARCH = '/search'
	TRENDING = '/trending'
	SUBSCRIPTION = '/subscription'
	HISTORY = '/history'
	LIKED_VIDEOS = '/liked_videos'
	SETTINGS = '/settings'
	SEND_FEEDBACK = 'send_feedback'
	VIDEO_GAMES = 'video_games'
	MY_CHANNEL = 'channel'

	VIDEO(path: string) {
		return `/v/${path}`
	}

	CHANNEL(path: string) {
		return `/c/${path}`
	}
}

export const PAGE = new publicPageConfig()

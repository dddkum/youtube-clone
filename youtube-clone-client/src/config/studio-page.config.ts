class studioPageConfig {
	HOME = '/studio'
	UPLOAD_VIDEO = `${this.HOME}/upload`
	SETTINGS = `${this.HOME}/settings`

	EDIT_VIDEO(path: string) {
		return `/edit/v/${path}`
	}
}

export const STUDIO_PAGE = new studioPageConfig()

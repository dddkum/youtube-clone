export function convertViews(views: number) {
	let convertedViews: string

	if (views >= 1_000_000_000) {
		convertedViews = (views / 1_000_000_000).toFixed(1)
		convertedViews = convertedViews.endsWith('.0') ? convertedViews.slice(0, -2) : convertedViews
		return `${convertedViews}B views`
	} else if (views >= 1_000_000) {
		convertedViews = (views / 1_000_000).toFixed(1)
		convertedViews = convertedViews.endsWith('.0') ? convertedViews.slice(0, -2) : convertedViews
		return `${convertedViews}M views`
	} else if (views >= 1_000) {
		convertedViews = (views / 1_000).toFixed(1)
		convertedViews = convertedViews.endsWith('.0') ? convertedViews.slice(0, -2) : convertedViews
		return `${convertedViews}K views`
	} else {
		return `${views} views`
	}
}

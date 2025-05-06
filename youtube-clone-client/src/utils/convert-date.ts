import dayjs from 'dayjs'
import relativeDate from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeDate)

export function convertDate(createdAt: string) {
	return dayjs(createdAt).fromNow()
}
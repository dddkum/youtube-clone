import axios, { type CreateAxiosDefaults } from 'axios'
import { API_URL } from '@/constants/constants'

const options: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

export const api = axios.create(options)

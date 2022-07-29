import { supabase } from './supabase'
import { BbsContent, BbsContentAdd } from '../interface/bbs'

export const getBbsContents = async () => {
	const { data, error, status } = await supabase
		.from<BbsContent>('bbs_contents')
		.select('*')
		.order('created_at', { ascending: false })

	if (error && status !== 406) {
		console.log(error.message)
	}

	if (data == null) {
		const data: BbsContent[] = []
		return data
	}
	return data
}

export const addBbsContent = async (content: BbsContentAdd) => {
	const { data, error, status } = await supabase
		.from<BbsContent>('bbs_contents')
		.insert({ user_name: content.user_name, body: content.body })

	if (error && status !== 406) {
		console.log(error.message)
	}

	return data
}
import { useState } from 'react'
import { useContents } from "../contexts/bbsContentsContext"
import { addBbsContent } from "../api/bbsApi"
import { BbsContentAdd } from "../interface/bbs"
import "98.css"

export const Form = () => {
	const { dispatch } = useContents()
	const [userName, setUserName] = useState('')
	const [content, setContent] = useState('')

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if (userName !== '' && content !== '') {
			const toPost: BbsContentAdd = {
				user_name: userName,
				body: content
			}
			addBbsContent({ ...toPost })
			dispatch({
				type: 'ADD_CONTENT',
				content: {
					...toPost,
					created_at: '',
					id: 0,
				},
			})
		}
		setUserName('')
		setContent('')
	}

	const handleUserNameChange = (e: React.FormEvent<HTMLInputElement>) => {
		setUserName(e.currentTarget.value)
	}

	const handleContentChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
		setContent(e.currentTarget.value)
	}


	return (
		<div>
			<label>名前：
				<input
					type='text'
					value={userName}
					onChange={handleUserNameChange}
				/>
			</label>
			<label>コメント：
				<textarea
					value={content}
					onChange={handleContentChange}
				>
				</textarea>
			</label>
			<div className="control-label">
				<button onClick={handleSubmit}>投稿する</button>
			</div>
		</div>
	)
}
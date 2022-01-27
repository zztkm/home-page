import { useContents } from "../contexts/bbsContentsContext"
import { ReactElement, useEffect } from "react"
import { getBbsContents } from "../api/bbsApi"
import Head from "../components/Head"
import { Form } from "../components/Form"
import { BbsContent } from "../interface/bbs"
import "98.css"

export default function BbsContents() {
	const {
		state: { contents },
		dispatch,
	} = useContents()
	useEffect(() => {
		getBbsContents().then((data) => {
			dispatch({ type: 'SET_CONTENTS', contents: data })
		})
	}, [dispatch])

	return (
		<>
			<Head title="ジャンボBBS" />
			<h1>
				ジャンボBBS
			</h1>
			<Form />
			<ul>
				{contents.length === 0 ? (
					<p>No Post</p>
				) : (
					contents.map((content) => (
						<Content key={content.id} content={content} />
					))
				)}
			</ul>
		</>
	)
}

const Content = ({ content }: { content: BbsContent }) => (
	<div className="window">
		<div className="title-bar">
			<div className="title-bar-text">{content.user_name} | {content.created_at}</div>
			<div className="title-bar-controls">
				<button aria-label="Minimize"></button>
				<button aria-label="Maximize"></button>
			</div>
		</div>
		<div className="window-body">
			{content.body}
		</div>
	</div>
)
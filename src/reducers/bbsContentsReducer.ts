import { BbsContent } from '../interface/bbs'

export type ContentsAction =
	| { type: 'SET_CONTENTS'; contents: BbsContent[] }
	| { type: 'ADD_CONTENT'; content: BbsContent }

export type ContentsState = {
	contents: BbsContent[]
}

export const initialState: ContentsState = {
	contents: [],
}

export const contentsReducer = (
	state: ContentsState,
	action: ContentsAction
): ContentsState => {
	switch (action.type) {
		case 'SET_CONTENTS':
			return { contents: action.contents }
		case 'ADD_CONTENT':
			return { contents: [action.content, ...state.contents] }
		default:
			return state
	}
}
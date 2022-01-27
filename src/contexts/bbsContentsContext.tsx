import {
	createContext,
	Dispatch,
	ReactNode,
	useReducer,
	useContext,
} from 'react'
import {
	ContentsAction,
	contentsReducer,
	ContentsState,
	initialState,
} from '../reducers/bbsContentsReducer'

type ContentsContextProps = {
	state: ContentsState
	dispatch: Dispatch<ContentsAction>
}

const ContentsContext = createContext<ContentsContextProps>({
	state: initialState,
	dispatch: () => initialState,
})

export const ContentsProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(contentsReducer, initialState)
	return (
		<ContentsContext.Provider value={{ state, dispatch }}>
			{children}
		</ContentsContext.Provider>
	)
}

export const useContents = () => useContext(ContentsContext)
import { createContext, useReducer } from 'react';

export const AdvocateContext = createContext({
  advocates: [],
  updateAdvocates: () => {},
});

function advocateReducer(state, action) {
  if (action.type == 'UPDATE_ADVOCATES') {
    return {

      advocates: [...action.payload]
    }
  }
  return state
}

export default function AdvocateContextProvider({children}) {
  const [advocateState, advocateDispatch] = useReducer(
    advocateReducer,
    {
      advocates: [],
    }
  )

  function handleUpdateAdvocates(newAdvocates) {
    advocateDispatch({
      type: 'UPDATE_ADVOCATES',
      payload: newAdvocates,
    })
  }

  const ctxValue = {
    advocates: advocateState.advocates,
    updateAdvocates: handleUpdateAdvocates,
  }

  return (
    <AdvocateContext.Provider value={ctxValue}>{children}</AdvocateContext.Provider>
  )
}

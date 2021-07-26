import React, { createContext, Dispatch, useReducer, useContext } from 'react';

export type ModalDataType = {
  id: number,
  name: string,
  content: string
}

type State = {
  isModal: boolean;
  modalData: Array<ModalDataType>;
}

type Action =
  | {type: 'OPEN_MODAL'; modalData: Array<ModalDataType>}
  | {type: 'CLOSE_MODAL';}

type SampleDispatch = Dispatch<Action>;

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

const reducer = (state: State, action: Action): State => {
  switch(action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isModal: true,
        modalData: [
          ...state.modalData,
          ...action.modalData
        ]
      }
    
    case 'CLOSE_MODAL':
      return {
        ...state,
        isModal: false,
        modalData: []
      }

    default:
      throw new Error('unhandled action')
  }
}

type Props = {
  children: React.ReactNode
}

export const SampleProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, {
    isModal: false,
    modalData: []
  })

  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  )
}

export function useSampleState() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
}

export function useSampleDispatch() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error('Cannot find SampleProvider');
  return dispatch;
}
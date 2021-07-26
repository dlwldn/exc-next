import Modal from "../components/Modal";
import { useSampleDispatch, useSampleState } from "../components/SampleContext";
import UserList from "../components/userList";


const exampleData = [
  {id: 1, name: "학생1", content: "임시데이터1"},
  {id: 2, name: "학생2", content: "임시데이터2"},
  {id: 3, name: "학생3", content: "임시데이터3"},
  {id: 4, name: "학생4", content: "임시데이터4"},
  {id: 5, name: "학생5", content: "임시데이터5"},
  {id: 6, name: "학생6", content: "임시데이터6"},
]


export default function Home() {
  const state = useSampleState();
  const dispatch = useSampleDispatch();

  const _onClick = () => {
    dispatch({type: 'OPEN_MODAL', modalData: exampleData})
  }

  return (
    <>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh"}}>
        페이지 내용
        <button onClick={_onClick}>클릭!</button>
      </div>

      {state.isModal &&
        <Modal>
          <UserList userList={state.modalData}/>
        </Modal>
      }
    </>
  )
}

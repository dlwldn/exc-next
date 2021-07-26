import React from 'react';
import { ModalDataType } from './SampleContext';
import UserListItem from './userListItem';

type Props = {
  userList: Array<ModalDataType>
}

const UserList = (props: Props) => {
  const { userList } = props
  const examItem = userList.map(item => <UserListItem key={item.id} userItem={item}/>)

  return (
    <ul>
      {examItem}
    </ul>
  )
}

export default UserList

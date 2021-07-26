import React from 'react';
import { ModalDataType } from './SampleContext';

type Props= {
  userItem: ModalDataType
}

const UserListItem = (props: Props) => {
  const { userItem } = props;

  return (
    <li>
      {userItem.name}
    </li>
  )
}

export default UserListItem

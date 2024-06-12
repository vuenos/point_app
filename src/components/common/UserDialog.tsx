"use client";

import React from 'react';
import { UserDialogStyle } from '@/styles/HeaderStyles';

interface UserDialogProps {
  isOpen: boolean;
  onClose: () => void;
  user: { name?: string; email?: string };
}

const UserDialog: React.FC<UserDialogProps> = ({isOpen, onClose, user}) => {
  if (!isOpen) return null;

  return (
    <UserDialogStyle>
      <ul>
        <li>{user.email}</li>
        <li>{user.name}</li>
      </ul>
      <div>
        <button onClick={onClose}>close</button>
      </div>
    </UserDialogStyle>
  );
}

export default UserDialog;

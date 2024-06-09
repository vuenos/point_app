"use client";

import React from 'react';

interface UserDialogProps {
  isOpen: boolean;
  onClose: () => void;
  user: { name: string; email: string };
}

const UserDialog: React.FC<UserDialogProps> = ({isOpen, onClose, user}) => {
  if (!isOpen) return null;

  return (
    <div>
      {user.email}
      {user.name}
      <div>
        <button onClick={onClose}>close</button>
      </div>
    </div>
  );
}

export default UserDialog;

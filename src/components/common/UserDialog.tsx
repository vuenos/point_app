"use client";

import React from 'react';

interface UserDialogProps {
  isOpen: boolean;
  onClose: () => void;
  user: { name: string; email: string };
}

export default function UserDialog({isOpen, onClose, user}) {
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

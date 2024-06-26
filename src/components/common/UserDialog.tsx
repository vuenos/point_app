"use client";

import React from 'react';
import {UserDialogStyle} from '@/styles/HeaderStyles';
import {RiCloseLine} from "react-icons/ri";
import Link from 'next/link';

interface UserDialogProps {
  isOpen: boolean;
  onClose: () => void;
  user: { name?: string; email?: string };
}

const UserDialog: React.FC<UserDialogProps> = ({isOpen, onClose, user}) => {
  if (!isOpen) return null;

  return (
    <UserDialogStyle>
      <div className="user-info-wrap">
        <ul className="info-list">
          <li>{user.email}</li>
          <li>{user.name}</li>
        </ul>

        <ul className="user-features">
          <li>
            <Link href="/card/regist" scroll={false}>Add Card</Link>
          </li>
        </ul>

        <div className="foot">
          <button onClick={onClose}><RiCloseLine/> Close</button>
        </div>
      </div>
    </UserDialogStyle>
  );
}

export default UserDialog;

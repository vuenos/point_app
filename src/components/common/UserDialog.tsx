"use client";

import React from 'react';
import {UserDialogStyle} from '@/styles/HeaderStyles';
import {RiCloseLine} from "react-icons/ri";
import {RiAccountPinCircleLine} from "react-icons/ri";
import {RiAtLine} from "react-icons/ri";
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
          <li><RiAccountPinCircleLine/> <a href="/member/mypage">{user.name}</a></li>
          <li className="user-email"><RiAtLine/> {user.email}</li>
        </ul>

        <ul className="user-features">
          <li>
            <Link href="/card/regist" scroll={true}>Add Card</Link>
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

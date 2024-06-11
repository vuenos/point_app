"use client";

import {SessionProvider, useSession} from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};

export const Provider = ({children}: Props) => {

  return <SessionProvider>{children}</SessionProvider>;
};

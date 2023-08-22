import React, { ReactNode } from 'react';
import { sendViewLog, sendClickLog } from "./logFunctions"
import { InView } from 'react-intersection-observer';

interface Props {
  children: ReactNode;
  vls?: string;
  cls?: string;
}

export default function Log(props: Props) {
  const {children, ...directProps} = props;

  return (
    <InView
      as="div"
      triggerOnce
      onChange={(inView, entry) => {
        inView && sendViewLog(directProps.vls)
      }}
      onClick={
        async() => {
          sendClickLog(directProps.cls)
        }}
    >
      {children}
    </InView>
  );
}

import React from 'react'
import {useRouter} from 'next/router';
import Link from 'next/link'

import MainHeader from '@comps/header/MainHeader';
export default function DefaultLayoutNavBar({children}) {

  return (
    <div className="container-fluid">
      <MainHeader/>
      {children}
    </div>
  )
}

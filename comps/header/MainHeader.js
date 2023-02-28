import React, { useState } from 'react'
import HeaderNavBar from './HeaderNavBar'
import Link from 'next/link'
export default function MainHeader() {
    const [currentTime, setCurrentTime] = useState("9:30am")
    //console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)

  return (
    <div className="">
        <div className="row border border-dark border-top-0">
            <div className="col-2 d-flex align-items-center justify-content-center">
            </div>
            <div className="col-8 d-flex align-items-center justify-content-center py-2">
                <Link aria-label="John Le Houillier's Portfolio, Home   " role="button" className={"link"} href="/">
                    <h2>John Le Houillier's Portfolio</h2>
                </Link>
            </div>
            <div className=" d-flex align-items-center justify-content-center col-2 text-center py-2">
                <h2></h2>
            </div>
        </div>
        <HeaderNavBar/>
    </div>
  )
}

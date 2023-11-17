import React from 'react'
import HeaderNavButton from './HeaderNavButton'

export default function HeaderNavBar() {
    return (
        <div className="">
            <div role="group" className="row align-items-center text-center" style={{height: 80}}>
                <HeaderNavButton pageName={"About"}/>
                <HeaderNavButton pageName={"Projects"} isMiddle={true}/>
                <HeaderNavButton pageName={"Contact"}/>
            </div>
        </div>

    )
}

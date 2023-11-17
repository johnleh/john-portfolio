"use client";
import React from 'react'
import Link from 'next/link'
import { useRouter,usePathname } from 'next/navigation'

export default function HeaderNavButton({pageName,isMiddle}) {
    
    const pageRoute =  "/" + pageName.toLowerCase()
    const isCurrentPage = usePathname() == pageRoute
    let containerClassName = " col-4 h-100 border-dark "
    if(isMiddle) containerClassName += " border-start border-end "
    if(!isCurrentPage) containerClassName += " border-bottom "

    return (
        <div className={containerClassName}>
            <Link role="button" className={"link text-center"} href={pageRoute}>
                <h3 className={"d-flex align-items-center justify-content-center h-100 align-middle"}>
                    {pageName}
                </h3>
            </Link>
        </div>
    )
}

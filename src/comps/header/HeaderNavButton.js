"use client";
import React from 'react'
import Link from 'next/link'
import {usePathname } from 'next/navigation'

export default function HeaderNavButton({pageName,needsEndBorder}) {
    
    const pageRoute =  "/" + pageName.toLowerCase()
    const isCurrentPage = usePathname() == pageRoute
    let containerClassName = " col-6 h-100 border-dark "
    if(needsEndBorder) containerClassName += " border-end "
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

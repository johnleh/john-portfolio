import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function HeaderNavButton({page}) {
    
    const route = useRouter();
    const isCurrentPage = route.asPath == page.route
    let containerClassName = "col-4 h-100 border-dark border-bottom border-start"
    containerClassName += isCurrentPage ? " border border-bottom-0 border-top-0 border-end-0" : " "
    containerClassName += page.title == "Contact" ? " border-bottom border-end" : " border-bottom "

    return (
        <div className={containerClassName}>
            <Link className={"link text-center"} href={page.route}>
                <h3 className={"d-flex align-items-center justify-content-center h-100 align-middle"}>
                    {page.title}
                </h3>
            </Link>
        </div>
    )
}

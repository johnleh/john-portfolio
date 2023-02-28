import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function HeaderNavButton({page}) {
    
    const route = useRouter();
    const isCurrentPage = route.asPath == page.route
    let containerClassName = "col-4 h-100 border-dark border-start "
    containerClassName += isCurrentPage ? " " : " border-bottom  "

    return (
        <div className={containerClassName}>
            <Link role="button" className={"link text-center"} href={page.route}>
                <h3 className={"d-flex align-items-center justify-content-center h-100 align-middle"}>
                    {page.title}
                </h3>
            </Link>
        </div>
    )
}

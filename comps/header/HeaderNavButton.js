import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

export default function HeaderNavButton({page}) {
    
    const route = useRouter();
    const isCurrentPage = route.asPath == page.route
    let containerClassName = "col-3 h-100 border-dark pt-3"
    containerClassName += page.title == "Contact" ? " border-bottom " : " border-bottom "
    containerClassName += isCurrentPage ? " border border-bottom-0 " : " "

    return (
        <div className={containerClassName}>
            <Link href={page.route}>
                <h2>
                    {page.title}
                </h2>
            </Link>
        </div>
    )
}

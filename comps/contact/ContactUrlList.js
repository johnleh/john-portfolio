import React from 'react'
import LinkListUrl from '@comps/LinkListUrl'
import Link from 'next/link'
export default function ContactUrlList() {
    const contactLinks = [
        {
            title: "My LinkedIn",
            link: "https://www.linkedin.com/in/john-le-houillier"
        },{
            title: "My GitHub",
            link: "https://github.com/johnleh"
        }]

    return (
        contactLinks.map((contactLink,index) => (
            <LinkListUrl 
                text={contactLink.title}
                link={contactLink.link}
                outsideUrl={true}/>
        ))
    )
}

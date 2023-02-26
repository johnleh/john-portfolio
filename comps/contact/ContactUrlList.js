import React from 'react'
import LinkList from '@comps/LinkList'

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
            <div key={index}>
                <LinkList
                    text={contactLink.title}
                    link={contactLink.link}/>
            </div>
        ))
    )
}

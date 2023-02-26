import React from 'react'
import LinkList from '@comps/LinkList'

export default function ProjectList({projects}) {
    return (
        projects.map((project,index) => (
            <div key={index}>
                <LinkList
                    text={project.title}
                    link={"projects/" + index}/>
            </div>
        ))
    )
}

import React from 'react'
import LinkListUrl from 'src/comps/LinkListUrl'

export default function ProjectList({projects}) {
    return (
        projects.map((project,index) => (
            <div key={index}>
                <LinkListUrl
                    text={project.title}
                    link={"projects/" + index}/>
            </div>
        ))
    )
}

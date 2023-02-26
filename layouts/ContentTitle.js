import React from 'react'
import Link from 'next/link'

export default function ContentTitle({page, projectId}) {

  const prevRoute = projectId >= 0 ? projectId != 0 ? "/projects/" + (parseInt(projectId) - 1) : null : null
  const nextRoute = projectId >= 0 ? projectId != page.projects.length - 1 ? "/projects/" + (parseInt(projectId) + 1) : null : null
  const isProject = page.isProject

  return (
    <div className="min-h-13 pt-3 w-75 mx-auto align-items-center text-center">
        <div className="row mx-auto">
            <div className="col-2 pt-3">
            {prevRoute ? 
              <Link href={prevRoute}>Prev</Link>
            : <></>}
            </div>
            <div className="col-8">
                <h1>{page.title}</h1>
            </div>
            <div className="col-2 pt-3 ">
            {nextRoute ? 
              <Link href={nextRoute}>Next</Link>
            : <></>}
            </div>
      <div className="row mx-auto">
            <div className="col-12 ">
                {isProject && page.gitUrl ? 
                  <Link href={page.gitUrl}>
                    <small className="">Repository Here!</small>
                  </Link>
                  :
                  <small className="text-muted">{page.subtitle}</small>
                }
            </div>
          </div>
      </div>
    </div>
  )
}

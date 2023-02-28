import React from 'react'
import Link from 'next/link'

export default function ContentTitle({page, projectId}) {

  const prevRoute = projectId >= 0 ? projectId != 0 ? "/projects/" + (parseInt(projectId) - 1) : null : null
  const nextRoute = projectId >= 0 ? projectId != page.projects.length - 1 ? "/projects/" + (parseInt(projectId) + 1) : null : null
  const isProject = page.isProject

  return (
    <div className="mt-2 w-75 mx-auto align-items-center text-center">
        <div className="row mx-auto">
            <div className="col-2 d-flex align-items-center justify-content-center h-100 align-middle">
            {prevRoute ? 
              <Link className="link button" href={prevRoute}><h2 className="">Prev</h2></Link>
            : <></>}
            </div>
            <div className="col-8 ">
                <h1>{page.title}</h1>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center h-100 align-middle">
            {nextRoute ? 
              <Link className="link button" href={nextRoute}><h2>Next</h2></Link>
            : <></>}
            </div>
      <div className="row mx-auto">
            <div className="col-12 ">
                {isProject && page.gitUrl ? 
                  <Link className="link" href={page.gitUrl}  passHref legacyBehavior>
                      <a className="link" target="_blank" rel="noopener noreferrer">
                        <small className="button">Repository Here!</small>
                      </a>
                  </Link>
                  :
                  <small className="">{page.subtitle}</small>
                }
            </div>
          </div>
      </div>
    </div>
  )
}

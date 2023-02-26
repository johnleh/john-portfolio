import React from 'react'
import ContactUrlList from '@comps/contact/ContactUrlList'
import ProjectList from '@comps/projects/ProjectList'

export default function ContentBody({page}) {
  return (
    <div className="container min-h-50 w-75 mx-auto my-3 align-items-center text-center p-5">
        <p>
            {page.desc}
        </p>
        {page.title == "Projects" ? 
          <ProjectList projects={page.projects}/>
          :
          null
        }
        {page.title == "Contact" ? 
          <ContactUrlList/>
          :
          null
        }
    </div>
  )
}

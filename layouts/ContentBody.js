import React from 'react'
import ContactUrlList from '@comps/contact/ContactUrlList'
import ProjectList from '@comps/projects/ProjectList'
import ContactForm from '@comps/contact/ContactForm'

export default function ContentBody({page}) {
  return (
    <div className="align-items-center text-center py-4 w-75 mx-auto">
        {page.p1 ? <p className="">{page.p1}</p> : null}
        {page.title =="Contact" ? <ContactForm/> : null}
        {page.p2 ? <p className="">{page.p2}</p> : null}
        {page.p3 ? <p className="">{page.p3}</p> : null}
        {page.title == "Projects" ? <ProjectList projects={page.projects}/> : null}
        {page.title == "Contact" ? <ContactUrlList/> : null}
        {page.p4 ? <p className="">{page.p4}</p> : null}

    </div>
  )
}

import React from 'react'
import { useRouter } from 'next/router';
import ErrorPage from '@layouts/ErrorPage';
import ContentTitle from '@layouts/ContentTitle';
import ContentBody from '@layouts/ContentBody';
import LoadingContent from '@layouts/LoadingContent';
import usePages from '@hooks/usePages'
import useProjects from '@hooks/useProjects';

export default function ContentLayout({pageTitle,projectId}) {
  if (!pageTitle) return <ErrorPage id={0}/>
  let page;
  if(pageTitle != "Loading") {

    const pageData = usePages();  
    const projectData = useProjects();

    if (pageData.error) return <ErrorPage id={1} error={pageData.error}/>;
    if (pageData.isLoading) return <LoadingContent/>;
    if (projectData.error) return <ErrorPage id={2} error={projectData.error}/>;
    if (projectData.isLoading) return <LoadingContent/>;
    

    const pages = JSON.parse(pageData.data)
    page = pages.filter((page) => {return page.title == pageTitle})[0]
    
    if(pageTitle == "Projects") {
      const projects = JSON.parse(projectData.data)

      if(projectId >= 0 && projects) {
        if(projectId >= projects.length) return <ErrorPage id={4}/>
        const project = projects[projectId]
        page = project
        page.isProject = true;
      }

      page.projects = projects;

    }
  } else {
    page = {
      title: "Loading",
      subtitle: "Loading",
      desc: "Loading"
    }
  }

  return (
    <div className="">
      <ContentTitle  
                    page={page}
                    projectId={projectId}/>
      <ContentBody            
                    page={page}
                    projectId={projectId}/>
    </div>
  )
}

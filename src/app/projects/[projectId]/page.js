import React from 'react';
import PageContent from '@comps/PageContent'
import ProjectData from 'src/app/projects/ProjectData'


export default function Projects({ params }) {
  let pageData
  try {
    const projectId = params.projectId
    pageData = ProjectData[projectId]
    pageData.projectId = projectId
  } catch {
    pageData = ProjectData[0]
    pageData.projectId = 0
  }

  return (
      <PageContent pageData={pageData} isProject={true}> 
      </PageContent>
  )
}


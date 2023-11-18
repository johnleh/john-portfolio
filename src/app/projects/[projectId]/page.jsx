"use client";
import React from 'react';
import PageContent from '@comps/PageContent'
import ProjectData from 'src/app/projects/ProjectData'
import { useRouter } from 'next/navigation'


export default function Projects({ params }) {
  const router = useRouter()
  let pageData
  try {
    const projectId = params.projectId
    pageData = ProjectData[projectId]
    pageData.projectId = projectId
  } catch {
    router.push('/projects')
    return <></>
  }

  return (
      <PageContent pageData={pageData} isProject={true}> 
      </PageContent>
  )
}


"use client";
import PageContent from '@comps/PageContent'
import ProjectData from '@utils/ProjectData'
import { useRouter } from 'next/navigation'


export default function Projects({ params }) {
  const projectId = params.projectId
  const router = useRouter()
  let pageData
  try {
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


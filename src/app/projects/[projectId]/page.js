"use client";
import PageContent from '@comps/PageContent'
import ProjectData from '@utils/ProjectData'
import { useRouter } from 'next/navigation'


const pageData = {
  "title": "Projects",
  "route": "/projects",
  "inNavBar": true,
  "subtitle" : "What I've Done!",
  "p1" : "Here, you'll find a collection of my most recent projects.",
  "p2" : "Take your time to explore each one, and don't hesitate to reach out if you have any questions or feedback.",
  "p3" : "I hope these projects inspire and excites you as much as they do me!"
}


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


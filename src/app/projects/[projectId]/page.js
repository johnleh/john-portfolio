import PageContent from '@comps/PageContent'
import ProjectData from '@utils/ProjectData'

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
  let pageData = ProjectData[projectId]
  pageData.projectId = projectId
  return (
      <PageContent pageData={pageData} isProject={true}> 
      </PageContent>
  )
}


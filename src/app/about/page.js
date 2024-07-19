import PageContent from '@comps/PageContent'
import ContactUrlList from './ContactUrlList'

const pageData = {
  "title": "About",
  "route": "/about",
  "inNavBar": true,
  "subtitle" : "Who I am!",
  "p1" : "I am a full-stack software engineer with a passion for web development.",
  "p2" : "My knowledge in front-end technologies such as Javascript, React and Next.js, back-end technologies such as SQL and MongoDB, and Restful API design has enabled me to create websites that provide complex services in an easily accessible format.",
  "p3" : "Feel free to reach out if you have any questions!"
}

export default function About() {
  return (
    <PageContent pageData={pageData}>
      <ContactUrlList/>
    </PageContent>
  )
}
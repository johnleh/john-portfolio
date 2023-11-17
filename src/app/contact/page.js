import PageContent from '@comps/PageContent'
import ContactUrlList from '@comps/contact/ContactUrlList'

const pageData = {
  "title": "Contact",
  "subtitle" : "How To Reach Me!",
  "route": "/contact",
  "inNavBar": true,
  "p1" : "If you have any questions, feedback, or collaboration ideas, I would love to hear from you.",
  "p2" : "You can find links to my GitHub and LinkedIn profiles below.",
  "p3" : "Thank you for your interest, and I look forward to hearing from you!"
}

export default function Contact() {
  return (
    <PageContent pageData={pageData}>
      <ContactUrlList/>
    </PageContent>
  )
}

  
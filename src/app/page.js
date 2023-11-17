import Link from 'next/link'
import PageContent from '@comps/PageContent'

const pageData = {
    "title": "Welcome",
    "route": "/",
    "subtitle" : "Welcome to my portfolio website!",
    "p1" : "To get started, please use the navigation header at the top of the page to explore different sections of my site.",
    "p2" : "You'll find an About page where you can learn more about me and my background, a Projects page where you can browse through my work, and a Contact page where you can get in touch with me.",
    "p3" : "Thank you for visiting, and I hope you enjoy your time on my site!"
}


export default function Home() {
  return (
    <PageContent pageData={pageData}/>
  )
}

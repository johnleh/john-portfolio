import PageContent from '@comps/PageContent';

const pageData = {
  "title": "Oh Uh!",
  "route": "/404",
  "inNavBar": true,
  "subtitle" : "Page Not Found!",
  "p1" : "The page you are looking for does not exist. Click my name at the top to return to the home page.",
}

export default function NotFound() {
  return (
    <PageContent pageData={"404"}/>
  )
}


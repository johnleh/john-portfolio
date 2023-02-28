import Link from 'next/link'

export default function LinkListUrl({text,link, outsideUrl}) {
  return (
    <div className="row mx-auto m-4">
        <div className="col text-center">
            {outsideUrl ? 
            <Link className="" href={link}  passHref legacyBehavior>
              <a className="link button" target="_blank" rel="noopener noreferrer">
                  <small>{"-> " + text + " <-"}</small>
              </a>
            </Link>  
            :
            <Link className={"link button"} href={link}>{"-> " + text + " <-"}</Link>
            }
        </div>
    </div>
  )
}

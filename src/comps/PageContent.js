import ProjectData from "src/app/projects/ProjectData"
import Link from "next/link"
export default function PageContent({pageData,isProject, children}) {

    const RenderContentTitle = () => {

        const RenderSubtitle = () => {
            if(!pageData.subtitle) return <></>
            const FormatSubtitle = () => {
                switch (pageData.subtitleType) {
                    case "GitLink":
                        return (
                            <Link className="link" href={pageData.subtitle}  passHref legacyBehavior>
                                <a className="link" target="_blank" rel="noopener noreferrer">
                                    <small className="button">Repository Here!</small>
                                </a>
                            </Link>
                        )
                    default:
                        return <small className="">{pageData.subtitle}</small>
                }
            }
            return (
                <div className="row mx-auto">
                        <div className="col-12 ">
                            {FormatSubtitle()}
                        </div>
                    </div>
            )
        }

        const ProjectQuckNav = () => {
            const projectId = pageData.projectId
            const prevRoute = projectId >= 0 ? projectId != 0 ? "/projects/" + (parseInt(projectId) - 1) : null : null
            const nextRoute = projectId >= 0 ? projectId != ProjectData.length - 1 ? "/projects/" + (parseInt(projectId) + 1) : null : null

            return (
                <>
                <div className="col-2 d-flex align-items-center justify-content-center h-100 align-middle">
                    {prevRoute ? 
                        <Link className="link button" href={prevRoute}><h2 className="">Prev</h2></Link>
                        : <></>}
                </div>
                <div className="col-8">
                    <h1>{pageData.title}</h1>
                </div>
                <div className="col-2 d-flex align-items-center justify-content-center h-100 align-middle">
                    {nextRoute ? 
                        <Link className="link button" href={nextRoute}><h2>Next</h2></Link>
                        : <></>}
                </div>
                </>
            )
        }

        return (
            <div className="mt-2 w-100 mx-auto align-items-center text-center">
                <div className="row mx-auto">
                    {isProject ? <ProjectQuckNav/>: 
                    <div className="col-12"><h1>{pageData.title}</h1></div>}
                    {RenderSubtitle()}
                </div>
            </div>)
    }

    const RenderContentBody = () => {
        return (
            <div className="align-items-center text-center py-4 col-10 mx-auto">
                {pageData.p1 ? <p className="">{pageData.p1}</p> : null}
                {pageData.p2 ? <p className="">{pageData.p2}</p> : null}
                {pageData.p3 ? <p className="">{pageData.p3}</p> : null}
                {children}
                {pageData.p4 ? <p className="">{pageData.p4}</p> : null}
            </div>
        )
    }

    return (
    <>
    {RenderContentTitle()}
    {RenderContentBody()}
    </>
    )
}
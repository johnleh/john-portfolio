import Link from 'next/link'

export default function LinkList({text,link}) {
  return (
    <div className="row pt-4 mx-auto">
        <div className="col text-center">
          {"-> "}
          <Link href={link}>{text}</Link>
          {" <-"}
        </div>
    </div>
  )
}

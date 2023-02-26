import Link from 'next/link'

export default function LinkList({text,link}) {
  return (
    <div className="row pt-2 w-50 mx-auto">
        <div className="col-3 text-end">
            <p>{"->"}</p>
        </div>
        <div className="col-6 text-center">
            <Link href={link}>{text}</Link>
        </div>
    </div>
  )
}

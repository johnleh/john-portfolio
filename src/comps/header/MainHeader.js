import HeaderNavBar from './HeaderNavBar'
import Link from 'next/link'

export default function MainHeader() {
    //console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)

  return (
    <div className="text-center border-5 ">
        <div className="row border-dark bg-black">
            <div className="col-2 d-flex align-items-center justify-content-center">
            </div>
            <div className="col-8 d-flex align-items-center justify-content-center py-2">
                <h2 className="text-white">
                    John Le Houillier&apos;s Portfolio
                </h2>
            </div>
            <div className=" d-flex align-items-center justify-content-center col-2 text-center py-2">
                <h2></h2>
            </div>
        </div>
        <HeaderNavBar/>
    </div>
  )
}

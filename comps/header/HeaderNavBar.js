import React from 'react'
import HeaderNavButton from './HeaderNavButton'
import usePages from '../../hooks/usePages'

export default function HeaderNavBar() {
    const data = usePages();
    if (data.error) return <div>Failed to load</div>;
    if (data.isLoading) {
        return (<div></div>)
    }
    const pageData = JSON.parse(data.data);

    return (
        <div className="">
            <div role="group" className="row align-items-center text-center" style={{height: 80}}>
                {pageData.map((page) => ( 
                    page.inNavBar ?
                    <HeaderNavButton key={page.route} page={page}/>
                    :
                    <></>
                ))}
            </div>
        </div>

    )
}

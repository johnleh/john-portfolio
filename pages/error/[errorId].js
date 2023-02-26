import React from 'react'
import ErrorPage from '@comps/content/ErrorPage'
export default function ErrorPage() {
    const { errorId } = router.query
    return (
        <ErrorPage errorId={errorId}/>
    )
}

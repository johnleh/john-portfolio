import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from '@layouts/ErrorPage'

export default function Error() {
    const router = useRouter();
    const { errorId } = router.query
    return (
        <ErrorPage errorId={errorId}/>
    )
}

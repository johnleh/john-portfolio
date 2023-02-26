import React from 'react'
import useErrors from '@hooks/useErrors'
import LoadingScreen from '@layouts/LoadingContent';
import ContentLayout from '@layouts/ContentLayout';

export default function ErrorPage({id, detailedError}) {
    //TODO: Handle detailedError
    const {data, isLoading, error} = useErrors();
    if (error) return <ErrorPage/>;
    if (isLoading) return <LoadingScreen/>

    const errors = JSON.parse(data)

    let errorText = "Error in fectching error list from JSON."

    if(id >= 0) {
        if(id >= errors.length) return <ErrorPage id={5}/>
        errorText = errors[id].text
    }

    const page = {
        title : "Error",
        subtitle : "Uh Oh!",
        desc : errorText
    }

    return (
        <ContentLayout page={page}/>
    )
}

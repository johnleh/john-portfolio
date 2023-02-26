import React from 'react'
import DefaultLayoutNavBar from '../../layouts/DefaultLayoutNavBar';
import { useRouter } from 'next/router';
import ContentLayout from '@layouts/ContentLayout'; 

export default function Project() {
    const router = useRouter()
    const { projectId } = router.query

    return(
        <ContentLayout pageTitle={"Projects"} projectId={projectId}/>
    )
    
}

Project.getLayout = function(page) {
    return <DefaultLayoutNavBar>{page}</DefaultLayoutNavBar>;
};
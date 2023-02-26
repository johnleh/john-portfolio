import { useRouter } from 'next/router';
import React from 'react'
import DefaultLayoutNavBar from '@layouts/DefaultLayoutNavBar';
import ContentLayout from '@layouts/ContentLayout';

export default function Projects() {
  const router = useRouter();

  function handleProjectClick(index) {
    router.push('/projects/' + index);
  }

  return (
    <ContentLayout pageTitle={"Projects"}/>
  )
}

Projects.getLayout = function(page) {
    return <DefaultLayoutNavBar>{page}</DefaultLayoutNavBar>;
};
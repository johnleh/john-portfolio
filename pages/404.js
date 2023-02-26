import React from 'react'
import DefaultLayoutNavBar from '@layouts/DefaultLayoutNavBar';
import ContentLayout from '@layouts/ContentLayout';

export default function NotFound() {
  return (
    <ContentLayout pageTitle={"404"}/>
  )
}

NotFound.getLayout = function(page) {
  return <DefaultLayoutNavBar>{page}</DefaultLayoutNavBar>;
};

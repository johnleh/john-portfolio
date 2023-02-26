import React from 'react'
import DefaultLayoutNavBar from '@layouts/DefaultLayoutNavBar';
import ContentLayout from '@layouts/ContentLayout';

export default function About() {
  return (
    <ContentLayout pageTitle="About"/>
  )
}

About.getLayout = function(page) {
  return <DefaultLayoutNavBar>{page}</DefaultLayoutNavBar>;
};
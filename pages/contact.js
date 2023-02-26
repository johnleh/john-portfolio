import React from 'react'
import DefaultLayoutNavBar from '../layouts/DefaultLayoutNavBar';
import ContentLayout from '@layouts/ContentLayout';

export default function Contact() {
  return (
    <ContentLayout pageTitle="Contact"/>
  )
}

Contact.getLayout = function(page) {
    return <DefaultLayoutNavBar>{page}</DefaultLayoutNavBar>;
  };
  
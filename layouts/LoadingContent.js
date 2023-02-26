import HeaderNavBar from '@comps/header/HeaderNavBar'
import ContentLayout from '@layouts/ContentLayout'
import React from 'react'

export default function LoadingScreen() {
  return (
    <>
      <HeaderNavBar/>
      <ContentLayout pageTitle="Loading"/>
    </>
  )
}

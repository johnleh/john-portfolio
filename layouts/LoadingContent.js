import HeaderNavBar from '@comps/header/HeaderNavBar'
import ContentLayout from '@layouts/ContentLayout'
import React from 'react'

export default function LoadingScreen() {
  return (
    <div className="vw-100 vh-100 align-middle text-center">
        <div className="position-absolute top-50 start-50 translate-middle">
            <h1>Loading</h1>
        </div>
    </div>
  )
}

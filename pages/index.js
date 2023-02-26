import Link from 'next/link'
import DefaultLayoutNavBar from '@layouts/DefaultLayoutNavBar';
import ContentLayout from '@layouts/ContentLayout';
export default function Home() {
  return (
    <ContentLayout pageTitle="Home"/>
  )
}

Home.getLayout = function(page) {
  return <DefaultLayoutNavBar>{page}</DefaultLayoutNavBar>;
};

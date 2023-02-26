import '../styles/globals.css'
import DefaultLayout from '@layouts/DefaultLayout';
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({ Component, pageProps }) {

  const renderCorrectLayout = Component.getLayout ||
  function (page) {
    return <Layout>{page}</Layout>;
  };
  if(Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  } else {
    return (
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    )
  }
}

export default MyApp

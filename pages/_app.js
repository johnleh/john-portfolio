import '../styles/globals.css'
import DefaultLayout from '@layouts/DefaultLayout';
import 'bootstrap/dist/css/bootstrap.css'
import UnderConstruction from '@comps/UnderConstruction'
function MyApp({ Component, pageProps }) {
  if(process.env.NODE_ENV == "production") {
    return (
      <UnderConstruction/>
    )
  }
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

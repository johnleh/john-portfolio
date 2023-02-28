import '../styles/globals.css'
import DefaultLayout from '@layouts/DefaultLayout';
import 'bootstrap/dist/css/bootstrap.css'
import UnderConstruction from '@comps/UnderConstruction'
function MyApp({ Component, pageProps }) {
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

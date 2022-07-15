import '@/styles/globals.css'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import store from '@/redux/store'
import CurrentUser from '@/components/common/current-user'
import AuthComponent from '@/components/auth'

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <AuthComponent>
        <CurrentUser />
        <Component {...pageProps} />
      </AuthComponent>
    </Provider>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default App

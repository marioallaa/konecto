import PropTypes from 'prop-types'
import Head from 'next/head'
import Footer from '../footer'
import Header from '../header'
import { twMerge } from 'tailwind-merge'

const SharedLayout = ({ children, title, className }) => {
  return (
    <>
      <Head>
        <title>Konecto | {title}</title>
      </Head>
      <Header />
      <main className={twMerge('min-h-[600px]', className)}>{children}</main>
      <Footer />
    </>
  )
}

SharedLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default SharedLayout

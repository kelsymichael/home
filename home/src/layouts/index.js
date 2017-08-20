import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './stylus/index.styl'


const Header = () =>
    <div className='header'>
        <Link
          to="/" className='header__title'>
          home
        </Link>
        <Link
          to='/page-2' className='header__title'>
          about
        </Link>
    </div>

const TemplateWrapper = ({ children }) =>
  <div className='template-wrapper'>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div className='main-wrapper'>
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

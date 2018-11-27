import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { getAppPage, getAboutPage } from './AsyncRequire'

const AppPage = getAppPage()
const AboutPage = getAboutPage()
const LoadingPage = ({ router }) => {
  if (router) {
    router.push("/app")
  } else {
    location.href = location.origin || (location.protocol + '//' + location.host)
  }
  return (
    <div>Loading……</div>
  )
}

const AppRouter = (
  <Router history={hashHistory}>
    <Route path='/app' getComponent={AppPage} />
    <Route path='/about' getComponent={AboutPage} />
    <Route path='*' exact={true} component={LoadingPage} />
  </Router>
)

export default AppRouter
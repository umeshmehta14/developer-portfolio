import React from 'react'

import { About, Blog, Contacts, Education, Experience, Landing, Navbar, Projects, Skills } from '../components'

function HomePage() {
  return (
    <>
      {/* <BackToTop /> */}
      {/* <ChangeTheme /> */}
      <Navbar />
      <Landing />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Blog />
      <Contacts />
    </>
  )
}

export default HomePage

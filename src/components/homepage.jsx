import React from 'react'
import Navbar from './navabar'
import BookManagementHomepage from './homepageutil'
import { Footer } from './FOOTER.JSX'

export const Homepage  = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BookManagementHomepage></BookManagementHomepage>
      <Footer></Footer>
    </div>
  )
}

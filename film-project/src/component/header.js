import React, { Component } from 'react'
import Navbar from './navbar'
import Carousel from './carousel'

export default class Header extends Component {
 render() {
  return (
   <header>
    <Navbar />
    <Carousel />
   </header>
  )
 }
}

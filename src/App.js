import React from 'react'

 import Header from './Cynthia/Header'
import About from './Lucky/About'
import Landing from './Ebuka/Landing'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import SignPage from './Stella/SignPage'
import Register from './Stella/Register'
import Booking from './confidence/Booking'



const App = () => {
  return (
    <BrowserRouter>
     <Header/>
<Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/Booking" component={Booking} />
    <Route exact path="/about" component={About} />
    <Route exact path="/sign" component={SignPage} />
        <Route exact path="/register" component={Register} />
 </Switch>
     </BrowserRouter>
  )
}

export default App

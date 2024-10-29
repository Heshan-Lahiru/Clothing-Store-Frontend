import React from 'react'
import Nav from '../../navigationbar/nav'
export default function home() {
  return (
    <div>
      <Nav />

         <div className='row'>
        <div className='col-6 m-l-3' style={{marginTop:'10%'  }}>
         <center> <h1 >Welcome to Boo Boutique</h1>
         <h1> Where Style Meets Passion</h1></center>
        </div>
        <div className='col-6'>
       <img style={{width:'60%'}} src='cover.gif' alt='cover' />
        </div>
         </div>
<div className='row'>
<div className="container my-5">
  <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
    <img style={{width:'10%'}} src='cover.gif' alt='cover' />
    <h1 className="text-body-emphasis">Placeholder jumbotron</h1>
   <p class="col-lg-6 mx-auto mb-4">
      This faded back jumbotron is useful for placeholder content. It's also a great way to add a bit of context to a page or section when no content is available and to encourage visitors to take a specific action.
    </p>
    <button className="btn btn-primary px-5 mb-5" type="button">
      Call to action
    </button>
  </div>
</div>
  
</div>

    </div>
  )
}

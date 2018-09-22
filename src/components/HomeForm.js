import React from 'react'
import '../styles/homeForm.css'

function HomeForm(props){
    return(
      <div className="formWrap">
        <form name="homeScreen" netlify>
          <p className="homeFormText">Please provide your information. An associate will be in contact with you...</p><br/>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Enter Name"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Phone Number</label>
            <input type="email" className="form-control" id="exampleInputEmail2" placeholder="Phone Number"/>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Subscribe to Newsletter</label>
          </div>
          <button type="submit" className="btn btn-primary formSubmitButton">Submit</button>
        </form>
      </div>
    )
}

export default HomeForm

import React from 'react';
import { Form, Input } from 'semantic-ui-react'

class Homepage extends React.Component {

  render() {
    return (
      <div>
        <div className="ui horizontal divider">
          <h1>Axis Tuition Centre <br></br>Students Attendance </h1>
          <form className="ui form segment">
            {/* <p>Tell Us About Yourself</p> */}
            <div className="field">
              {/* <div className="field">
                <label>Name</label>
                <input placeholder="First Name" name="name" type="text" />
              </div> */}
              <div className="field">
                <label>Select Center</label>
                <select className="ui dropdown" name="selectcentre">
                  <option value="">Ponders End</option>
                  <option value="finchley">Finchley</option>
                  <option value="hendon">Hendon</option>
                </select>
              </div>
            </div>
            <div className="field">
              <div className="field">
                <label>Username</label>
                <input placeholder="Username" name="username" type="text" />
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" name="password" />
              </div>
            </div>
            {/* <div className="field">
              <label>Skills</label>
              <select name="skills" multiple="" className="ui dropdown">
                <option value="">Select Skills</option>
                <option value="css">CSS</option>
                <option value="html">HTML</option>
                <option value="javascript">Javascript</option>
                <option value="design">Graphic Design</option>
                <option value="plumbing">Plumbing</option>
                <option value="mech">Mechanical Engineering</option>
                <option value="repair">Kitchen Repair</option>
              </select>
            </div> */}
            {/* <div className="inline field">
              <div className="ui checkbox">
                <input type="checkbox" name="terms" />
                <label>I agree to the terms and conditions</label>
              </div>
            </div> */}
            <div className="ui primary submit button">Submit</div>
            <div className="ui error message"></div>
          </form>
        </div>
      </div>
    );
  }
};

export default Homepage;

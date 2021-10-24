import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React, { Component } from 'react';
import Form from './components/Form';
import LivePreview from './components/LivePreview';
import Hero from './components/Hero';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accentColor: '',
      name: '',
      email: '',
      phone: '',
      summary: '',
      skills: '',
      experience:
        '<h6>MGM Studios</h6><p><em>Senior Magician (2018 - Present)</em></p><ul><li>Responsibility 1</li><li>Responsibility 2</li><li>Responsibility 3</li><li>Accomplishment 1</li><li>Accomplishment 2</li></ul><h6>Luxor, Las Vegas</h6><p><em>Magician Apprentice (2008 - 2018)</em></p><ul><li>Responsibility 1</li><li>Responsibility 2</li><li>Responsibility 3</li><li>Accomplishment 1</li><li>Accomplishment 2</li></ul>',
      education:
        '<h6>Advanced Magic Post-Graduate School</h6><p>Doctor of Magic Education (2016)</p><h6>School of Wizards</h6><p>Master of Magic, certificate in Magic Literature (2008)</p><h6>Hogwarts Prepatory School</h6><p>Bachelor of Magic Science (2004)</p>',
    };

    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
  }

  handleColorChange(color) {
    this.setState({
      accentColor: color,
    });
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleEducationChange(value) {
    console.log(value);
    this.setState({
      education: value,
    });
  }

  handleExperienceChange(value) {
    console.log(value);
    this.setState({
      experience: value,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Hero />
        <div className="row">
          <div className="col-md-4">
            <Form
              handleInputChange={this.handleInputChange}
              handleExperienceChange={this.handleExperienceChange}
              handleEducationChange={this.handleEducationChange}
              handleColorChange={this.handleColorChange}
              state={this.state}
            />
          </div>
          <div className="col-md-8">
            <h4>Live Preview</h4>
            <LivePreview state={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

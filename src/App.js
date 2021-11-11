import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React, { Component } from 'react';
import Form from './components/Form';
import LivePreview from './components/LivePreview';
import Hero from './components/Hero';
import styled from 'styled-components';
import { Stepper, Step } from 'react-form-stepper';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0,
      accentColor: { hex: '#D1C4E9' },
      name: '',
      email: '',
      phone: '',
      summary: '',
      skills: '',
      experience:
        '<h6>MGM Studios</h6><p><em>Senior Magician (2018 - Present)</em></p><ul><li>Wizard ipsum dolor amet wizard Ipsum is how wizards working with non-magical folk and slip a little magic into their workday—without breaching any secrecy laws</li><li>Many know lorum ipsum as the kind of Latin-looking filler copy used on website</li><li>What isn’t widely known is that Lorum Ipsum isn’t the jumbled Latin created by Cicero. </li><li>Accomplishment 1</li><li>Accomplishment 2</li></ul><h6>Luxor, Las Vegas</h6><p><em>Magician Apprentice (2008 - 2018)</em></p><ul><li>Task ahead Greenway embrace unwise hatched flash-flame juice behaving hat spirits wood. </li><li>J.R.R. Tolkien mirror desired supposed penalty marches arts. Irons host nobody line marshland lasts deed massing deadliest Aragorn! </li><li>Gateway particular iron-forged mat party Were-worms whyfors fortunate. Hard price leg Elros visiting?</li><li>Accomplishment 1</li><li>Accomplishment 2</li></ul>',
      education:
        '<h6>Advanced Magic Post-Graduate School</h6><p>Doctor of Magic Education (2016)</p><h6>School of Wizards</h6><p>Master of Magic, certificate in Magic Literature (2008)</p><h6>Hogwarts Prepatory School</h6><p>Bachelor of Magic Science (2004)</p>',
    };

    this.handleColorChange = this.handleColorChange.bind(this);
    this.handleEducationChange = this.handleEducationChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleExperienceChange = this.handleExperienceChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
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

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      activeStep: 1,
    });
  }

  render() {
    return (
      <div className="container">
        <Hero />
        <div className="row">
          <div className="col-md-12">
            <Stepper
              className="stepper"
              activeStep={this.state.activeStep}
              styleConfig={{
                activeBgColor: 'hsl(216,98%,52%)',
                completedBgColor: 'hsl(216,98%,52%)',
                labelFontSize: '1rem',
              }}
            >
              <Step label="Enter your information" />
              <Step label="View Preview" />
              <Step label="Download" />
            </Stepper>
            {this.state.activeStep === 0 && (
              <Form
                handleInputChange={this.handleInputChange}
                handleExperienceChange={this.handleExperienceChange}
                handleEducationChange={this.handleEducationChange}
                handleColorChange={this.handleColorChange}
                state={this.state}
                handleFormSubmit={this.handleFormSubmit}
              />
            )}
            {this.state.activeStep === 1 && <LivePreview state={this.state} />}
          </div>
        </div>
      </div>
    );
  }
}

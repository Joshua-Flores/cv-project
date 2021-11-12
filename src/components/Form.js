import React from 'react';
import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { SwatchesPicker } from 'react-color';
import styled from 'styled-components';

const Submit = styled.button`
  float: right;
`;

export default function Form({
  state,
  handleColorChange,
  handleEducationChange,
  handleExperienceChange,
  handleInputChange,
  handleStepChange,
}) {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="TwitterPicker" className="form-label">
          Select accent color
        </label>
        <SwatchesPicker
          color={state.accentColor.hex}
          accentColor={state.accentColor}
          onChangeComplete={handleColorChange}
        />
        <div className="mb-4 mt-4">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            value={state.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="form-label">
            Profession
          </label>
          <input
            type="text"
            name="profession"
            className="form-control"
            id="profession"
            placeholder="Example: Magician"
            value={state.profession}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="name"
            name="email"
            value={state.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="form-label">
            Phone number
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={state.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="location" className="form-label">
            Location
          </label>
          <input
            type="text"
            className="form-control"
            id="location"
            name="location"
            placeholder="Example: Southern California"
            value={state.location}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="summary" className="form-label">
            Summary
          </label>
          <textarea
            className="form-control"
            id="summary"
            name="summary"
            placeholder="Example: I am a magician based out of Southern California with over ten years experience in the highly exclusive SoCal magic scene."
            value={state.summary}
            onChange={handleInputChange}
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="skills" className="form-label">
            Skills
          </label>
          <textarea
            className="form-control"
            id="skills"
            name="skills"
            placeholder="Example: Card tricks, escape, vanishing, transportation, levitation"
            value={state.skills}
            onChange={handleInputChange}
            rows="3"
          ></textarea>
          <small id="skillsHelp" className="form-text text-muted">
            Enter your skills separated by a comma.
          </small>
        </div>
        <div className="mb-4">
          <label htmlFor="Experience" className="form-label">
            Experience
          </label>
          <SunEditor
            name="experience"
            onChange={handleExperienceChange}
            height="200px"
            defaultValue={state.experience}
            setOptions={{
              buttonList: [
                ['formatBlock', 'bold', 'italic', 'underline', 'list'],
              ],
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="Education" className="form-label">
            Education
          </label>
          <SunEditor
            name="education"
            onChange={handleEducationChange}
            height="200px"
            defaultValue={state.education}
            setOptions={{
              buttonList: [
                ['formatBlock', 'bold', 'italic', 'underline', 'list'],
              ],
            }}
          />
        </div>
        <Submit
          className="btn btn-primary"
          onClick={handleStepChange}
          value={1}
        >
          View Preview
        </Submit>
      </form>
    </div>
  );
}

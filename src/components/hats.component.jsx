import React from "react";
import './hats.sytles.css';
import Select from 'react-select';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

class HatPage extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        selectedOption: null,
        hideTextArea: true
    }
  }

  handleChange = selectedOption => {
    console.log(`Option selected:`, selectedOption.value);
    this.setState({ selectedOption: null });
    this.setState({ hideTextArea: false });

    
  };

  render() {
    const { selectedOption, hideTextArea } = this.state;
    const tStyle = hideTextArea ? {display: 'none'} : {}
    return (
      <div className="div2">
        <header>
          <h1>Creating Responsive Forms with Flexbox</h1>
          <p>
            While not well-suited
            for complete page layouts, Flexbox excels at controlling elements
            along a single axis or in arranging elements within discreet
            regions. This makes Flexbox a fantastic tool for creating responsive
            page elements that are normally tricky to handle, such as forms.
            Often Flexbox can create responsive components with a minimal amount
            of code and little to no media queries.
          </p>
          <h2>Short Forms</h2>
          <p>
            Our first exercise will focus on the basic concepts of how Flexbox
            can help create responsive content. We'll start with a basic search
            form that consists of two elements, a search input and a submit
            button.
          </p>
        </header>
        <div className="container">
        <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      />
      {/* <Select options={scaryAnimals} onChange={this.handleChange} /> */}
    </div>
    <div style={tStyle}>
        <textarea readOnly col='10' rows='300'></textarea>
    </div>
      </div>
    );
  }
}

export default HatPage;

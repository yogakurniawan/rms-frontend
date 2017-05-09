import React from 'react';

import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import {Step, Stepper, StepLabel} from 'material-ui/Stepper';
import ContentAdd from 'material-ui/svg-icons/content/add';

import EmployeeDetails from '../EmployeeDetails';

class DialogForm extends React.Component{

  constructor(props, context) {
  super(props, context);
  this.state = {
    stepIndex: 0
  }
}

handlePrev() {
  const {stepIndex} = this.state;
  if (stepIndex > 0) {
    this.setState({stepIndex: stepIndex - 1});
  }
}

handleNext() {
  const {stepIndex} = this.state;
  this.setState({
    stepIndex: stepIndex + 1,
  });
  if (stepIndex===5){

    // need to add actions create new employee

  }
};

getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <EmployeeDetails {...this.props}
            disabled={false}
          />
      );
    default:
      return (
        <div>
          <h2>Content</h2>
          <div></div>
        </div>
      );
  }
}

  render(){

    const {stepIndex} = this.state;
    const title = [
      <Stepper key="Stepper" linear={true} activeStep={stepIndex}>
        <Step>
          <StepLabel>Detail</StepLabel>
        </Step>
        <Step>
          <StepLabel>History</StepLabel>
        </Step>
        <Step>
          <StepLabel>Grades</StepLabel>
        </Step>
        <Step>
          <StepLabel>Dependents</StepLabel>
        </Step>
        <Step>
          <StepLabel>Address</StepLabel>
        </Step>
        <Step>
          <StepLabel>Location</StepLabel>
        </Step>
      </Stepper>
    ];

    const actionsBtn = [
      <RaisedButton
        label="Back"
        disabled={stepIndex === 0}
        onTouchTap={this.handlePrev.bind(this)}
      />,
      <RaisedButton
        label={stepIndex === 5 ? 'Create Employee' : 'Next'}
        secondary={true}
        keyboardFocused={true}
        onTouchTap={this.handleNext.bind(this)}
      />
    ];

    return(
      <div>
        <Dialog
          open={true}
          title={title}
          actions={actionsBtn}
          autoScrollBodyContent={true} >
          {this.getStepContent(stepIndex)}
        </Dialog>
      </div>
    )
  }
}

export default DialogForm;

import React, { Component } from 'react';

class EmployeeEditor extends Component {
  constructor() {
    super();
    employee: null,
    originalEmployee: null,
    notModified: true
  }

  componentWillReceiveProps(props) {
    this.setState({
      employee: Object.assign({}, props.selected),
      originalEmployee: props.selected,
      notModified: true
    })
  }

  handleChange(prop, value) {
    (if this.state.notModified) {
      this.setState({
        notModified: false
      })
    }

    save() {
      this.state.originalEmployee.setName(this.state.employee.name);
      this.state.originalEmployee.setTitle(this.state.employee.title);
      this.state.originalEmployee.setPhone(this.state.employee.phone);
      this.setState({
        notModified: true
      })
      this.props.refreshList();
    }

    cancel () {
      this.setState({
        employee: Object.assign({}, this.state.originalEmployee),
        notModified; true
      })
    }

  render() {
    return (
      <div className="infoCard">
        {
          this.state.employee
          ?
          <div>
            <span id="employeeID"> ID: { this.state.employee.id } </span>
            <p id="employeeTitle"> { this.state.originalEmployee.name } </p>
            <br />
            <button id="saveBtn" className="confirmationButton" disabled={this.state.notModified} onClick={ this.save }> Save </button>
            <button className="neutralButton" disabled={this.state.notModified} onClick={ this.cancel }> Cancel </button>
            <br />
            <span className="placeholderText"> Name </span>
            <input className="materialInput" value={ this.state.employee.name } onChange={ (e) => { this.handleChange('name', e.target.value) } }></input>
            <span className="placeholderText"> Phone Number </span>
            <input className="materialInput" value={ this.state.employee.phone } onChange={ (e) => { this.handleChange('phone', e.target.value) } }></input>
            <span className="placeholderText"> Title </span>
            <input className="materialInput" value={ this.state.employee.title } onChange={ (e) => { this.handleChange('title', e.target.value) } }></input>
          </div>
          :
          <p id="noEmployee"> No Employee Selected </p>
        }

      </div>
    )
  }
}

export default EmployeeEditor;

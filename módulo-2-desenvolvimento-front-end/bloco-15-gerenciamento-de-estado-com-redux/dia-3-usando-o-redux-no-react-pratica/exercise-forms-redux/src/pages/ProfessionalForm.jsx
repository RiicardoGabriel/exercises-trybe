import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { sendPersonalData } from '../redux/actions/actions';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculum: '',
      job: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { curriculum, job, description } = this.state;
    const { sendProfessionalData } = this.props;
    const professionalData = { curriculum, job, description };
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculum }
          name="curriculum"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="job"
          type="text"
          value={ job }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={ this.handleChange }
          value={ description }
          required
        />
        <Link to="/formdisplay">
          <Button
            label="enviar"
            onClick={ () => sendProfessionalData(professionalData) }
          />
        </Link>
      </fieldset>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendProfessionalData: (professionalData) => (
    dispatch(sendPersonalData(professionalData))),
});

ProfessionalForm.propTypes = {
  sendProfessionalData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(ProfessionalForm);

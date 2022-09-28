import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { data } = this.props;
    const { name, email, cpf, address, city, uf, curriculum, job, description } = data;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { name }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { address }
        </div>
        <div>
          Cidade:
          { city }
        </div>
        <div>
          Estado:
          { uf }
        </div>
        <div>
          Currículo:
          { curriculum }
        </div>
        <div>
          Cargo:
          { job }
        </div>
        <div>
          Descrição do cargo:
          { description }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  data: PropTypes.objectOf.isRequired,
  // name: PropTypes.string.isRequired,
  // description: PropTypes.string.isRequired,
  // job: PropTypes.string.isRequired,
  // curriculum: PropTypes.string.isRequired,
  // uf: PropTypes.string.isRequired,
  // city: PropTypes.string.isRequired,
  // address: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.personalReduce.personalData,
});

export default connect(mapStateToProps)(FormDataDisplay);

import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { primeraLetraMayuscula } from '../helper';

const ContenedorResumen = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;

const ElementoLista = styled.li`
  padding-bottom: 10px;
`;

const Resumen = ({ datos }) => {
  // Extraer de datos
  const { marca, year, plan } = datos;

  if (marca === '' || year === '' || plan === '') {
    return null;
  }

  return (
    <ContenedorResumen>
      <h2>Resumen de Cotización</h2>
      <ul>
        <ElementoLista>Marca: {primeraLetraMayuscula(marca)}</ElementoLista>
        <ElementoLista>Plan: {primeraLetraMayuscula(plan)}</ElementoLista>
        <li>Año del Vehículo: {year}</li>
      </ul>
    </ContenedorResumen>
  );
};

Resumen.propTypes = {
  datos: PropTypes.object.isRequired,
};

export default Resumen;

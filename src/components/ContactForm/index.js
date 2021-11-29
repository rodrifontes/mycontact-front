import PropTypes from 'prop-types';

import { useState, useRef } from 'react';
import { Form, ButtonContainer } from './style';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

export default function ContactForm({ buttonLabel }) {
  // Controlled components
  const [name, setName] = useState('');

  // Uncontrolled components
  //const emailInput = document.getElementById('input-email');
  const emailInput = useRef(null);

  return (
    <Form>
      <FormGroup>
        <Input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Nome"
        />
      </FormGroup>

      <FormGroup>
        <Input placeholder="E-mail" ref={emailInput} />
      </FormGroup>

      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>

      <FormGroup>
        <Select>
          <option value="instagram">Instragram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button type="submit">
          {buttonLabel}
        </Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};

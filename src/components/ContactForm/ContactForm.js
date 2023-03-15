import React from 'react';
import { Form } from './ContactForm.styled';
import { Button } from '../Button.styled';

import { useAddContactMutation } from 'redux/contactApi';

export default function ContactForm() {
  // const dispatch = useDispatch(); - вже не потрібно
  const [addContact] = useAddContactMutation();

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    try {
      await addContact({ name: name.value, phone: number.value });
    } catch (error) {
      alert(error.message);
    } finally {
      e.target.reset();
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label htmlFor="name">Name </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label htmlFor="number">Number</label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <Button type="submit">Add contact</Button>
    </Form>
  );
}

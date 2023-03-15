import { Button } from '../Button.styled';
import { Item } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contactApi';
// import { useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/operations'; вже не потрібні

export const Contact = ({ item: { id, name, phone, createdAt } }) => {
  // const dispatch = useDispatch();
  const [deleteContact, result] = useDeleteContactMutation();
  const handleDelete = async () => {
    try {
      await deleteContact(id);
    } catch (error) {
      alert(error.message);
    }
    // dispatch(deleteContact(id));
  };

  return (
    <Item>
      <span>{name}: </span>
      <span>{phone}</span>
      <Button type="button" onClick={handleDelete} disabled={result.isLoading}>
        Delete
      </Button>
    </Item>
  );
};

Contact.propTypes = {
  item: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }),
};

export const Contact = ({ item: { id, name, number }, onDelete }) => {
  return (
    <li>
      <span>{name}: </span>
      <span>{number}</span>
      <button type="button" onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

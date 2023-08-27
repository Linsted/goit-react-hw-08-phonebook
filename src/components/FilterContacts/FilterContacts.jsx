import PropTypes from 'prop-types';
import { Label, InputStyled, IconStyled } from './FilterContacts.styled';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';

export const FilterContacts = ({ filter }) => {
  const dispatch = useDispatch();

  return (
    <Label>
      {' '}
      Find contacts in your list. Simply enter the name you're looking for.
      <IconStyled />
      <InputStyled
        placeholder="Contact name"
        type="text"
        name="filter"
        onChange={evt => {
          dispatch(filterContact(evt.target.value));
        }}
        value={filter}
      />
    </Label>
  );
};

FilterContacts.propTypes = {
  onFilter: PropTypes.func,
  filter: PropTypes.string.isRequired,
};

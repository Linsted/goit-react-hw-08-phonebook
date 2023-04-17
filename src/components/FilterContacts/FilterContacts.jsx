import PropTypes from 'prop-types';
import { Label, InputStyled,IconStyled } from './FilterContacts.styled';
import { BiSearchAlt } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/filterSlice';


export const FilterContacts = ({ onFilter, filter }) => {

    const dispatch = useDispatch();



    return (
        <Label> You can filter your contact. Just fill in the name! <IconStyled />
            <InputStyled type="text" name='filter' onChange={(evt) => {
                dispatch(filterContact(evt.target.value))
            }} value={filter} />
        </Label>
    )
};

FilterContacts.propTypes = {
    onFilter: PropTypes.func,
    filter: PropTypes.string.isRequired,
};
import PropTypes from 'prop-types';
import { Item, SpanStyled } from './ListItem.styled';
import { Button } from './ListItem.styled';
import { useState } from 'react';
import { ModalWindow } from 'components/ModalWindow/ModalWindow';



export const ListItem = ({ contact: { name, number: phone, id }, onClick }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    


    const handleCancel = () => setShowConfirmation(false);
    const handleDelete = (id) => {
        setShowConfirmation(false);
        onClick(id)
    };
     
    const props = {
        id,
        handleCancel,
        handleDelete,
    };

    return (
        <>
            <Item>
                <SpanStyled>{name}</SpanStyled>
                <SpanStyled>{phone}</SpanStyled>
                <Button type='button' onClick={() => setShowConfirmation(true)}>Delete</Button>
            </Item>
            {showConfirmation && <ModalWindow {...props} />}
        </>
    )
};

ListItem.propTypes = {
    contact: PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};




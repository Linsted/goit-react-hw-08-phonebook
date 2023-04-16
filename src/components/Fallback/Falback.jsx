import { Puff } from "react-loader-spinner";
import { CenteredStyled } from "components/SharedLayout/SharedLayout.styled";

export const Fallback = () => {
    
    return (
        <CenteredStyled><Puff
            position="absolute"
            height="120"
            width="120"
            radius={1}
            color="#e582b4"
            ariaLabel="puff-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        /></CenteredStyled>
    )
}
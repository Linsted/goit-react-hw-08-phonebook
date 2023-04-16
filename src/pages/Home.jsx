import image from "../image/pexels-photomix-company-1038628 (1) (1).jpg";

import { useSelector } from "react-redux";
import { BackingStyled, TitleStyled,NavlinkStyled, SpanStyled,ImgStyled } from "components/Home/Home.styled";
import { useState } from "react";





const Home = () => {
  const  isLoggedIn  = useSelector(state => state.auth.isLoggedIn) 
   const [isImageLoaded, setIsImageLoaded] = useState(false);

  
   const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  
  return (
    
      
      <BackingStyled >
        { isImageLoaded && <TitleStyled>Save all your contacts <br/> in one place! <br/>
        { !isLoggedIn && <SpanStyled><NavlinkStyled to="/login">Login</NavlinkStyled></SpanStyled>}</TitleStyled>}
      <ImgStyled src={image} alt="" onLoad={handleImageLoad} />
      </BackingStyled>
      
  );
};

export default Home;
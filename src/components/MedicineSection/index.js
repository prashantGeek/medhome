import React from 'react';
import { Button } from '../ButtonElements';
import { MedicineContainer, MedicineWrapper, MedicineRow, Column2, Column1, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img} from './MedicineElements';

const MedicineSection = ({lightBg, id, imgStart, topLine, lightText,headLine,darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    return (
        <>
            <MedicineContainer lightBg={lightBg} id={id}>
                <MedicineWrapper>
                    <MedicineRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headLine}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                            <BtnWrap>
                                <Button to='home'
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark ={dark ? 1: 0}
                                dark2={dark2 ?1 :0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                            <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </MedicineRow>
                </MedicineWrapper>
            </MedicineContainer>
        </>
    );
};

export default MedicineSection;

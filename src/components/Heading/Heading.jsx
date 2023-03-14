import React from 'react';
import {TitleContainer, Title1, Title2} from './Elements';

const Heading = (props) => {
    
        return (
        <TitleContainer>
                <Title1>
                        {props.title}
                </Title1>
                <Title2>
                        {props.stitle}
                </Title2>
        </TitleContainer>       
        );
    }

export default Heading;
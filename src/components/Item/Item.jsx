import React from 'react';
import {ItemContainer, Icon, TitleH, Text, ListContent} from './Elements'

const Item = (props) => {

    return (
    
    <ItemContainer>
            <Icon>{props.icon}</Icon>
            <ListContent>
            <TitleH><h1>{props.title}</h1></TitleH>
            <Text><p>{props.text}</p></Text>
            </ListContent>
    </ItemContainer>
    );
}

export default Item;
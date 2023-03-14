import styled from 'styled-components';

export const ItemContainer = styled.div`
    display:flex;
    justify-content: center;
    flex-direction: row;
    padding-bottom:10px;
    margin-bottom:50px;
    margin-top:15px;
    border-radius: 10px;
    flex: grow;
    width: 500px;
    height:130px;
    background-color: rgb(247, 242, 242);

    &:hover {
        border:solid blue;
        width: 490px;
        height: 124px;
    }

    h1:hover {
        color:blue;
    text-decoration: underline;
    }

`

export const Icon = styled.div`
    margin-right:10px;
    padding-top:20px;
    margin-right:45px;
    margin-left:45px;
    margin-top: 20px;
    font-size: 50px;
`

export const ListContent = styled.div`
    display: flex;
    flex-direction:column
`

export const TitleH = styled.div`
    font-family: Poppins;
    font-size:12px;
    margin-bottom: 10px;
    text-align: start;
    font-weight: bold;
`

export const Text = styled.div`
    font-family: Poppins;
    font-size:20px;
    text-align: start;
    margin-top: -45px;
`
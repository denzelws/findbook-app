import styled from 'styled-components'


export const SearchContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 270px;
    width: 100%;
`

export const Title = styled.h2`
    color: #fafafa;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

export const Subtitle = styled.h3`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 40px;
`

export const Input = styled.input`
order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
                color: #FFF;
                font-size: 16px;
    }
`

export const Result = styled.div`
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    margin-top: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`
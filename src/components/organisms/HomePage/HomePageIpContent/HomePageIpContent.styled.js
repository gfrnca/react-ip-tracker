import styled from "styled-components";

export const HomePageIpContentWrapper = styled.div`
    width: 60%;
    background: white;;
    border-radius: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    margin-top: -40px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;


    .ip-info {
        flex: 1;
        border-radius: 8px;
        padding: 25px;

        p {
            font-size: 20px;
        }
    }
`
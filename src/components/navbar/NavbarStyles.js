import {NavLink as Link} from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
    background: #b9bbb6;
    height: 65px;
    display: flex;
    justify-content: space-between;
    padding .1rem calc((100vw - 1000px) / 2);
    z-index: 12;
    `;

export const NavLink = styled(Link)`
    color: #808080;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color: #000000;
    }
    `;

export const NavMenu = styled.div`

    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 768px) {
        display: none;
    `;

import styled from "styled-components";


const NavbarWrapper = styled.div`
    position : fixed;
    width : 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index : 1000;

.navbar-container{
    display : flex;
    padding : 10px 34px;
    justify-content : space-between;
    background-color: white;
}
.navbar-logo-container{
    display :flex;
    justify-content : center;
    align-items: center;
}
.middle-navlist{
    display : flex;
    gap : 20px;
    font-size : 13px;
    justify-content : center;
    align-items: center;
    font-weight : 600;
}
.middle-navlist>div {
    padding: 20px 0px;
    cursor : pointer;
    :hover{
        color: green;
    }
}
.navbar-searching{
    display :flex;
    justify-content : center;
    align-items: center;
}
.nav-arrival-img{
    display : flex;
    gap:50px;
}
.nav-arrival-img>div{
    max-width : 300px;
}
.arrival-container{
    display : flex;
    padding:20px 50px;
    height:100%;
    justify-content : space-between;
}
.newArrival-li-css>li{
    font-weight:400;
    line-height: 2em;
    font-size: 13px;
    color: black;
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }

}
.nav-heading{
    padding : 15px 0px;
    color: black;
}
.case-navlist-style{
    display: flex;
    gap: 40px;
}
.nav-case-right-side{
    display: flex;
    gap: 40px;
}
.nav-case-img{
    max-width: 400px;
    height: 75vh;
}
.case-li-css>li{
    font-weight:600;
    line-height: 5em;
    font-size: 13px;
    color: black;
    cursor: pointer;
    :hover{
        text-decoration: underline;
    }
}
`

export {NavbarWrapper}
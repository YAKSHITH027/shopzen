import styled from "styled-components";


const FooterWrapper = styled.div`
.delivery-wrapper{
    display: flex;
    justify-content: center;
    padding: 31px 17px;
    gap: 30px;
}
.delivery-flex-box{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
.knowsus-wrapper{
    display: flex;
    justify-content: space-between;
}
.knowus-main-left{
    display: flex;
    width:60%;
    justify-content: space-between;
    text-align: left;
    padding: 47px 0px 25px 34px;
}
.knowus-li-css li{
    line-height: 2em;
    text-align: left;
    font-size: 13px;
}
.knowus-main-right{
    width: 35%;
    display: inline-block;
}
.download-app{
    display: flex;
    gap: 0.5em;
}
.follous-main{
padding: 47px 30px 47px 0px;
}
.download-main{
padding: 47px 30px 47px 0px;
}
.followus-css{
    display: flex;
    gap: 0.5em;
}
.payment-main-css{
    padding: 0.5em;
    margin: 35px 0px;
}
.payment-css{
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(auto-fit,minmax(80px,max-content));
    gap: 0.5em;
}
`

export {FooterWrapper}
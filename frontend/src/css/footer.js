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
.knowus-li-css div{
    display:inline-block;
   :hover{cursor: pointer;
    text-decoration: underline;

    }
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
.footer-serched-object-heading{
    font-size: 13px;
    margin: 16px 0px 24px;
}
.most-search-wraper{
    margin:0px 10px;
    padding:33px 0px 0px 34px;
}
.accordian-wraper{
    padding:0px 0px 0px 34px;
}
.accordian-button{
    text-align:left ;
    padding:14px 34px 14px 34px;
}
.footer-li-css{
    color: black;
    display: flex;
    flex: 0 0 180px;
    box-sizing: border-box;
    flex-wrap: wrap;
}
.footer-li-css li{
    font-size: 9px;
    line-height: 1em;
    padding-bottom: 15px;
    margin-right: 20px;
    min-width: 180px;
    cursor: pointer;
    display:inline-block;
   :hover{cursor: pointer;
    text-decoration: underline;

    }
}
.footer-last-conainer{
    padding: 34px 36px;
    font-size: 13px;
    color: white;
    background-color: black;
}
.footermedia{
    display:none;
}
.footer-img2-handler{
display:none
}
@media only screen and (min-width: 320px) and (max-width: 670px){
    .footermedia{
    display:block;
}
.footer-li-css li{
    min-width: 120px;
}
.most-search-wraper{
    display:none;
}
.accordian-button{
    text-align:left ;
    padding:10px 5px;
}
.accordian-wraper{
    font-size: 13px;
    padding:4px;
}
.knowus-main-left{
    display:none;
}
.knowsus-wrapper{
    display:block;
}
.knowus-main-right{
    width:100%;
    padding:24px;
}
.delivery-flex-box{
    display: block;
    justify-content: center;
    align-items: center;
}
.follous-main{
padding: 24px;
}
.download-main{
padding: 24px;
}
.footer-img1-handler{
display:none
}
.footer-img2-handler{
display:block
}
}
`

export {FooterWrapper}
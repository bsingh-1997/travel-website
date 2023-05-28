.NavbarItems{
    display:flex ;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    box-shadow: 0 5px 15px 0 rgba(0,0,0,.25);
    width: 95%;
    height: 80px;
    border-radius: 13px;
}
.navbar-logo{
    color: #222;
    font-size: 2rem;
    cursor: pointer;

}
.nav-menu{
    display: grid;
    grid-template-columns: repeat(6,auto);
    grid-gap: 10px;
    list-style: none;
    align-items: center;
}
.nav-s{
    text-decoration: none;
    color: #222;
    font-size: 1.2rem;
    font-weight: 600;
    padding: 0.7rem 1rem;
    white-space: nowrap;
}
.nav-s i{
    padding-right: 10px;
}
.nav-s:hover{
    background-color: #01959a;
    color: #fff;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
}
.nav-s-mobile{
    display: none;
}
button{
    padding: 0.5rem 1rem;
    white-space: nowrap;
    border-radius: 0.3rem;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    transition: 0.2s ease-in-out;

}
button:hover{
    background-color: #151516;
    color: #fff;
}
.menu-icons{
    /* display: none; */
}

@media screen and (max-width:850px){
    .NavbarItems{
        z-index: 99;
    }
    .nav-menu{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background-color: green;
        width: 100%;
        height: auto;
        position: absolute;
        top: 0;
        left: -100;
        opacity: 0;
        align-items: stretch;
        padding: 80px 0 30px 0;
        margin: 0;
        flex-wrap: wrap;
        /* z-index: -1; */
}
.nav-menu.active{
    left: 0;
    opacity: 1;
    /* z-index: 101; */
    /* flex-wrap: wrap; */
}
.nav-s{
    display: block;
    width: 100%;
    font-size: 1.2rem;
    padding: 2rem 0;
}
.nav-s:hover{
    background-color: #01959a;
    transition: none;
}
.nav-s-mobile {
    display: block;
    text-align: center;
    padding: 1.5rem;
    margin: auto;
    border-radius: 4px;
    width: 80%;
    background-color: #01959a;
    text-decoration: none;
    color: #fff;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: 2px;
}
button{
    display: none;
}
.menu-icons{
    display: block;
    color: red ;
    font-size: 2rem;
}
}
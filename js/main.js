'use strict';

const navbar = document.querySelector('.header__navbar');
const bars = document.querySelector('.fa-bars');

const searchForm = document.querySelector('.header__search-form')
const searchBtn = document.querySelector('.fa-search')

const cart = document.querySelector('.header__cart-container')
const cartBtn = document.querySelector('.fa-shopping-cart')

const showMenuMobile = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active-search-form');
    cart.classList.remove('active');
}

const showCart = () => {
    cart.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active-search-form');
}

const showSearchForm = () => {
    searchForm.classList.toggle('active-search-form');
    cart.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active-search-form');
    cart.classList.remove('active');
}

bars.addEventListener('click', showMenuMobile);
cartBtn.addEventListener('click', showCart);
searchBtn.addEventListener('click', showSearchForm)
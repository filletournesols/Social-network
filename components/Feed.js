import { signOutFun } from '../app/signOut.js';
import { onNavigate } from '../main.js';
import { firebaseAuth } from '../app/firebase.js';

export const Feed = () => {
    const FeedDiv = document.createElement('div');
    const template = `
    <section class="logo-feed" id="logoFeed">
        <nav class="nav-bar">
                <img src="../Assets/logo.png"  alt="logo" class="logo-feed-img" id="logoFeedImg">
            <ul class="nav-menu" id="navMenu">
                <li class="nav-item-li">
                    <a href="#" class="nav-link" id="navLinkFeed">Muro</a>
                </li>
                <li class="nav-item-li">
                    <a href="#" class="nav-link" id="navLinkProfile">Perfil</a>
                </li>
                <li class="nav-item-li">
                    <a href="#" class="nav-link" id="navLinkCloseSession">Cerrar sesión</a>
                </li>
            </ul>
            <div class="hamburger-div" id="hamburgerDiv">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </nav>
    </section>
    <section class="create-post" id="createPostBtn">
        <button class="create-post-button" id="createPostButton">CREAR PUBLICACIÓN</button>
    </section>
    <section class="posts" id="posts">
        <div class="posts-background" id="postsBackground">
            <p class="posts-div-p" id="postsDivP">PUBLICACIÓN</p>
        </div>
    </section>
    <section class="btn-posts" id="btnPosts">
        <div class="posts-div-btns" id="postsDivBtns">
            <button class="paw-posts-div-btns"><img src="../Assets/pata-blanca.png"  alt="white_paw" class="paw-img" id="pawPostsDivBtns" ></button>
            <button class="edit-posts-div-btns" id="editPostsDivBtns">Editar</button>
        </div>
    <section class="posts" id="posts">
    `
    FeedDiv.innerHTML = template

    const hamburger = FeedDiv.querySelector('#hamburgerDiv')
    const navMenu = FeedDiv.querySelector('#navMenu')
    hamburger.addEventListener('click', ()=>{
        // añade clases de css existan o no
        hamburger.classList.toggle('active')
        navMenu.classList.toggle('active')
    })
    FeedDiv.querySelector('#navLinkFeed').addEventListener('click', ()=>{
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
    })
    FeedDiv.querySelector('#navLinkProfile').addEventListener('click', ()=>{
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
    })
    FeedDiv.querySelector('#navLinkCloseSession').addEventListener('click', ()=>{
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
        signOutFun(firebaseAuth)
        onNavigate('/')
    })

    return FeedDiv;
}
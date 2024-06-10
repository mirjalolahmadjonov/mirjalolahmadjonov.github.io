/* General */
@import url('https://fonts.googleapis.com/css2?family=Quantico:ital,wght@0,400;0,700;1,400;1,700&display=swap');

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
    border: none;
    outline: none;
    scroll-behavior: smooth;
    font-family: "Quantico", sans-serif;
    z-index: 1;
}

/* Fade In */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.home-fadeIn {
    animation: fadeIn 0.5s ease-in-out forwards;
}

.fadeIn {
    animation: fadeIn 0.5s ease-in-out forwards;
}

@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.fadeInLeft {
    animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInRight {
    0% {
        opacity: 0;
        transform: translateX(100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0%);
    }
}

.fadeInRight {
    animation: fadeInRight 0.5s ease-out forwards;
}

@keyframes fadeInBottom {
    0% {
        opacity: 0;
        transform: translateY(30%);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.fadeInBottom {
    animation: fadeInBottom 0.5s ease-out forwards;
}

.home-fadeInBottom {
    animation: fadeInBottom 0.5s ease-out forwards;
}

/* Zoom In*/
@keyframes zoomIn {
    0% {
        opacity: 0;
        transform: scale(0.5);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.zoomIn {
    animation: zoomIn 0.5s ease forwards;
}

/* Body and scrollbar*/
body {
    background-color: rgba(0, 0, 0, 0.98);
    color: #c8eeff;
}

::-webkit-scrollbar {
    width: 0.5rem;
    background-color: rgb(25, 25, 25);
    border: 1px solid #c8eeff4f;
}

::-webkit-scrollbar-button {
    background: rgb(0, 0, 0);
    border: 1px solid #c8eeff4f;
}

::-webkit-scrollbar-thumb {
    background: #000;
    border: 1px solid #c8eeff4f;
}


/* Section*/
section {
    margin-bottom: 0.1rem;
    min-height: 100vh;
    padding: 6.25rem 9%;
    background-color: #000000;
    border-radius: 0.5rem;
}

.section-title {
    text-transform: uppercase;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    animation: fadeIn 1s ease;
}


/* Header */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 72px;
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid #c8eeff;
    backdrop-filter: blur(15px);
    box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.4);
    z-index: 100;
    padding: 0 20px;
}

.header.hidden {
    top: -500px;
}

.logo {
    font-size: 2.5rem;
    color: #c8eeff;
    font-weight: 800;
}

.logo img {
    width: 3rem;
    border-radius: 50%;
    box-shadow: 0 0 10px #c8eeff;
    margin-top: 0.5rem;
}

.logo img:hover {
    transform: scale(1.03);
    box-shadow: 0 0 15px #a7e3ff;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar a {
    position: relative;
    font-size: 1.5rem;
    color: #c8eeff;
    margin: 0 15px;
    text-transform: uppercase;
}

.navbar a:hover,
.navbar a.active {
    color: #0395de;
    bottom: 1px;
    transition: .5s ease;
}

.navbar a::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -2px;
    background-color: #007bff;
    transition: width 0.3s ease;
    left: 50%;
    transform: translateX(-50%);
}

.navbar a:hover::after {
    width: calc(100% + 20px);
}

#menu-icon {
    font-size: 3rem;
    color: #c8eeff;
    cursor: pointer;
    display: none;
}

@media (max-width: 895px) {
    .navbar {
        flex-direction: column;
        position: absolute;
        top: 100%;
        width: 40%;
        right: 0;
        border-left: #c8eeff 1px solid;
        border-bottom: #c8eeff 1px solid;
        border-bottom-left-radius: 1rem;
        background: rgba(0, 0, 0, 0.8);
        box-shadow: 0px 5px 3px rgba(0, 0, 0, 0.4);
        padding: 0;
        max-height: 0;
        overflow: hidden;
        transition: max-height .5s ease;
    }

    .navbar.active {
        max-height: 20rem;
    }

    .navbar a {
        font-size: 1.2rem;
        margin: 1rem 0;
        display: block;
    }

    #menu-icon {
        display: block;
    }

    .navbar a:hover {
        padding-left: 1rem;
        transition: .5s ease;
    }
}

/* Home */

.home {
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8rem;
}

#particles-js {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
}

.home-content {
    animation: none;
}

.home-content h1 {
    opacity: 0;
    margin-top: 40px;
    font-size: 5rem;
    font-weight: 700;
    line-height: 1.3;
}

.home-content span {
    color: #0395de;
}

.home-content h3 {
    opacity: 0;
    font-size: 3rem;
    margin-bottom: 1rem;
    font-weight: 700;
    animation-delay: 0.25s;
}

.home-img {
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    position: relative;
    animation: fadeInLeft 1s ease forwards;
}

.blob {
    position: absolute;
    top: -8;
    left: -8;
    width: 44vw;
    margin-left: 2rem;
    z-index: 0;
    filter: drop-shadow(0 0 10px rgba(108, 99, 255, 0.7));
}

#blob {
    animation: blobAnimation 10s linear infinite;
}

@keyframes blobAnimation {
    0% {
        d: path("M418.5,296.5Q411,343,386,392.5Q361,442,305.5,468.5Q250,495,204.5,451.5Q159,408,122.5,376.5Q86,345,46,297.5Q6,250,43,201Q80,152,116,116Q152,80,201,61Q250,42,311,40.5Q372,39,415,84.5Q458,130,442,190Q426,250,418.5,296.5Z");
    }

    25% {
        d: path("M400,290.5Q391,331,361,361Q331,391,290.5,444Q250,497,210,442.5Q170,388,118.5,372Q67,356,38,303Q9,250,30.5,193Q52,136,104.5,112Q157,88,203.5,57Q250,26,291.5,66Q333,106,377.5,128Q422,150,415.5,200Q409,250,400,290.5Z");
    }

    50% {
        d: path("M434.5,303Q434,356,386.5,380Q339,404,294.5,426Q250,448,210,418Q170,388,119,371.5Q68,355,50,302.5Q32,250,42,193Q52,136,111,123.5Q170,111,210,103Q250,95,305,77Q360,59,385,108.5Q410,158,422.5,204Q435,250,434.5,303Z");
    }

    75% {
        d: path("M417.5,297Q413,344,393.5,404.5Q374,465,312,457.5Q250,450,203.5,430.5Q157,411,118,380Q79,349,78.5,299.5Q78,250,87.5,206Q97,162,111.5,98Q126,34,188,29Q250,24,295,58.5Q340,93,379.5,123Q419,153,420.5,201.5Q422,250,417.5,297Z");
    }

    100% {
        d: path("M418.5,296.5Q411,343,386,392.5Q361,442,305.5,468.5Q250,495,204.5,451.5Q159,408,122.5,376.5Q86,345,46,297.5Q6,250,43,201Q80,152,116,116Q152,80,201,61Q250,42,311,40.5Q372,39,415,84.5Q458,130,442,190Q426,250,418.5,296.5Z");
    }
}

.home-img img {
    width: 32vw;
    border-radius: 50%;
    border: 2px solid #007bff;
    filter: saturate(0.9) brightness(0.9);
    cursor: pointer;
    box-shadow: 0px 0 5px rgba(0, 0, 0, 0.4);
    z-index: 1;
}

.home-img img:hover {
    transform: scale(1.02);
    filter: drop-shadow(0 0 500px #7fd6ffd2) saturate(1.5);
    transition: .5s ease;
}

.home-content p {
    margin-top: 8rem;
    opacity: 0;
    font-size: 1.3rem;
    font-weight: 500;
    animation-delay: 0.5s;
}

.socnets a {
    opacity: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    background: transparent;
    border: 0.2rem solid #c8eeff;
    font-size: 2rem;
    border-radius: 50%;
    color: #c8eeff;
    margin: 3rem 1.5rem 3rem 0;
    animation-delay: 0.7s;
}

.socnets a:hover {
    transform: scale(1.1) translateY(-3px);
    box-shadow: 0 0 25px #c8eeff;
}

.socnets .linkedin:hover {
    color: #0072b1;
    background: rgb(234, 234, 234);
}

.socnets .github:hover {
    background: #ffff;
    color: #000;
}

.socnets .twitter:hover {
    background: #ffff;
    color: #000;
}

.socnets .telegram:hover {
    color: #0395de;
    background: #ffff;
}

.socnets .instagram:hover {
    background: #fff;
}

.socnets .instagram i:hover {
    border-radius: 0.375rem;
    color: #fff;
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
}

.btn {
    opacity: 0;
    display: inline-block;
    padding: 1rem 2.8rem;
    background: #000;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    color: #7fd7ff;
    letter-spacing: 0.1rem;
    font-weight: 600;
    transition: .3s ease;
    cursor: pointer;
    border: 2px solid #0395de;
    overflow: hidden;
    animation-delay: 1s;
}

.btn:hover {
    transform: scale(1.01);
    color: #000;
    box-shadow: 0 0 10px #0395de;
}

.btn::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: #0395de;
    z-index: -1;
}

.btn:hover::before {
    width: 100%;
    transition: .5s ease;
}

.typing-text {
    position: absolute;
    font-size: 2.125px;
    font-weight: 600;
    min-width: 17.5rem;
}

#cursor {
    font-size: 2rem;
    border: 1px solid #c8eeff;
    animation: blink 0.7s step-end infinite;
}

@keyframes blink {

    from,
    to {
        border-color: transparent;
    }

    50% {
        border-color: #c8eeff;
    }
}


@media (max-width:991px) {
    .home {
        flex-direction: column;
        gap: 4rem;
    }

    .home .home-content h3 {
        font-size: 2.5rem;
    }

    .home-content h1 {
        font-size: 5rem;
        margin-top: 20rem;
    }

    .home-img img {
        width: 70vw;
        margin-top: 25rem;
    }

    .blob {
        margin-top: 25rem;
        width: 94vw;
        margin-left: 0;
    }
}

/* ABOUT */

.about {
    opacity: 0;
}

.about-container {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    position: relative;
    z-index: 10;
    overflow: hidden;
}

.about-content {
    opacity: 0;
    display: inline-block;
    width: 50%;
}

.about-content h3 {
    font-size: 2rem;
    margin-bottom: 2rem;
}

.about-content p {
    font-size: 1.1rem;
    letter-spacing: 1px;
    word-spacing: 0.125rem;
}

.about-img {
    text-align: center;
    position: relative;
    perspective: 1000px;
}

.about-img img {
    position: relative;
    width: 25vw;
    border-radius: 0.5rem;
    border: #007bff solid 2px;
    box-shadow: 0 0 2500px #007bff8b;
    margin: 1rem;
    transition: treansform 0.1s ease;
}

#particle-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
}

.skills-container {
    overflow: hidden;
    width: 100%;
}

.skills {
    display: flex;
    justify-content: flex-start;
    animation: scroll 40s linear infinite alternate;
}

.skills span {
    display: flex;
    align-items: center;
    background-color: rgb(25, 25, 25);
    padding: 0.625rem 2.25rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    margin-right: 4rem;
}

.skills span:hover {
    transform: translateX(2px) translateY(-2px);
    box-shadow: -1px 1px 2px #c8eeff;
    background-color: #111;
}

@keyframes scroll {

    0%,
    100% {
        transform: translateX(-2400px);
    }

    50% {
        transform: translateX(400px);
    }
}

@media (max-width: 1200px) {
    .about-content {
        width: 80%;
    }

    .about-content h3 {
        font-size: 1.75rem;
    }

    .about-content p {
        font-size: 1rem;
    }

    .about-img img {
        width: 35vw;
    }
}

@media (max-width: 768px) {
    .about-content {
        width: 100%;
        text-align: center;
    }

    .about-img {
        width: 100%;
        justify-content: center;
    }

    .about-img img {
        width: 50vw;
    }
}

@media (max-width: 480px) {
    .about-container {
        gap: 4rem;
    }

    .about-content {
        width: 100%;
        text-align: center;
    }

    .about-content h3 {
        font-size: 1.5rem;
    }

    .about-content p {
        font-size: 0.9rem;
    }

    .about-img img {
        width: 70vw;
    }
}

/* PROJECTS */
.projects {
    position: relative;
    opacity: 0;
    overflow: hidden;
}

.projects img {
    position: absolute;
    width: 82%;
    height: 100%;
    filter: brightness(0.5);
    z-index: -1;
}

.slide-container {
    background-color: transparent;
    backdrop-filter: blur(10px);
    border-radius: 0.5rem;
}

.slide-content {
    margin: 0 2.5rem;
    overflow: hidden;
}

.card {
    opacity: 0;
    position: absolute;
    border: #000 1px;
    border-radius: 0.5rem;
    margin: 1rem 0;
    background-color: #ffffff20;
    backdrop-filter: blur(20px);
    filter: brightness(1.8);
}

.card-wrapper .card4,
.card-wrapper .card5,
.card-wrapper .card6,
.card-wrapper .card7,
.card-wrapper .card8,
.card-wrapper .card9 {
    opacity: 1;
    animation: none;
}

.image-content,
.card-content {
    padding: 0.625rem 0.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card:hover {
    box-shadow: 0 0 10px #000000;
    transform: translateX(2px) translateY(-2px);
    filter: brightness(2);
}

.card-image {
    position: relative;
    width: 100%;
    height: 17.5rem;
}

.card-image .card-img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    border: 2px solid #007bff;
}

.name {
    font-size: 1.25rem;
    font-weight: 700;
    padding: 0.875rem 0;
    color: #49c5ff;
}

.description {
    font-size: 0.875rem;
    text-align: center;
}

.card-content .btn {
    border: none;
    padding: 0.5rem;
    border-radius: 0.25rem;
    margin-top: rem;
    font-size: 1rem;
}

.swiper-navBtn::after {
    color: #ffffff;
}

.swiper-navBtn:hover::after {
    color: #285AEB;
}

.swiper-navBtn::after,
.swiper-navBtn::before {
    font-size: 2.5rem;
}

.swiper-button-next {
    right: 0;
}

.swiper-button-prev {
    left: 0;
}

@media (max-width:950px) {
    .card-wrapper .card3 {
        animation: none;
        opacity: 1;
    }
    .slide-container {
        margin: 0 10px;
    }
    .swiper-navBtn::after {
        display: none;
    }
}

@media (max-width:520px){
    .card-wrapper .card2 {
        animation: none;
        opacity: 1;
    }
}

/* Services */

.services-container {
    position: relative;
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat(3, 1.3fr);
    align-items: center;
    gap: 2.5rem;
    border-radius: 0.5rem;
}

.services img {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: brightness(0.5) blur(1px);
}

.service-card {
    opacity: 0;
    position: relative;
    background-color: #c8eeff;
    color: #000;
    height: 300px;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: .3s ease;
    overflow: hidden;
}

.card1 {
    animation-delay: 0.1s
}

.card2 {
    animation-delay: 0.2s
}

.card3 {
    animation-delay: 0.3s
}

.card4 {
    animation-delay: 0.4s
}

.card5 {
    animation-delay: 0.5s
}

.card6 {
    animation-delay: 0.6s
}

.card7 {
    animation-delay: 0.7s
}

.card8 {
    animation-delay: 0.8s
}

.card9 {
    animation-delay: 0.9s
}


.service-card:hover {
    background: rgb(0, 0, 0);
    color: #c8eeff;
    transform: scale(1.03);
    border: 1px solid #0395de;

}

.service-card img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    z-index: -2;
    filter: brightness(0.8);
}

.service-card img:hover {
    opacity: 0.374;
}

.service-info {
    display: flex;
    flex-direction: column;
    max-height: 200px;
    justify-content: center;
    align-items: center;
    padding: 5em;
}

.card-title {
    text-align: center;
    margin-top: 0.375rem;
    font-size: 1.375rem;
    font-weight: 500;
    margin-bottom: 0.375rem;
}

.service-info p {
    font-size: 0.9rem;
    font-weight: 400;
    max-height: 100px;
    margin: auto;
}

@media (max-width: 1200px) {
    .services-container {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }

    .card-title {
        font-size: 1.5rem;
    }

    .service-info p {
        font-size: 1.25rem;
    }
}

@media (max-width: 768px) {
    .services {
        text-align: center;
        padding: 2rem 1rem;
        grid-template-columns: repeat(1, 1fr);
    }

    .service-card {
        height: 200px;
    }

    .service-info {
        padding: 1rem;
    }
}

@media (max-width: 576px) {
    .services-container {
        grid-template-columns: repeat(1, 1fr);
        padding: 2rem 4rem;
    }

    .service-card {
        height: 250px;
    }

    .service-info {
        padding: 0.8rem;
    }

    .card-title {
        font-size: 1.5rem;
    }

    .service-info p {
        font-size: 0.8rem;
    }
}

/* Contact */
.contact {
    margin: 3rem 2rem 0 2rem;
    background-image: url();
    border: 1px solid #c8eeff6c;
}

.contact form {
    max-width: 70rem;
    margin: 1rem auto;
    margin-bottom: 3rem;
    text-align: center;
}

.contact form .input-box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

input,
textarea {
    width: 100%;
    padding: 1.5rem;
    margin: 1rem 0;
    border: 2px solid #c8eeff;
    background: transparent;
    color: #fff;
    font-size: 1.125rem;
    border-radius: 0.5rem;
    padding-left: 18px;
    resize: none;
}

/* footer */
footer {
    position: relative;
    bottom: 0;
    width: 100%;
    padding: 40px 0;
    background-color: #000;
}

footer .socnets {
    text-align: center;
    padding-bottom: 25px;
}

footer .socnets a {
    opacity: 1;
    font-size: 25px;
    border: #000;
}

footer .socnets a:hover {
    background: #000;
    transform: none;
    box-shadow: none;
}

footer ul {
    margin-top: 0;
    padding: 0;
    font-size: 18px;
    line-height: 1.8;
    margin-bottom: 0;
    text-align: center;
}

footer ul li a {
    color: #c8eeff97;
    border-bottom: 2px solid transparent;
    transition: 0.3s ease;
}

footer ul li a:hover {
    color: #c8eeff;
    border-bottom: 2px #c8eeff;
}

footer ul li {
    display: inline-block;
    padding: 0 15px;
}

footer p {
    color: #c8eeff31;
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 0;
    padding: 0;
}

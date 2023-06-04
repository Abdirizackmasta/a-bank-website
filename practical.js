// const header = document.querySelector('.header');

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML =
//   'we use cookies for improved functionality and analytics. <button class = "btn btn--close-cookie">Got it </button>';

// header.append(message.cloneNode(true));
// header.before(message);
// header.after(message);
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     // message.parentElement.removeChild(message);
//   });
// styles;
// message.style.backgroundColor = 'red';
// message.style.width = '120%';
// console.log(message.style.backgroundColor);
// console.log(getComputedStyle(message).height);

// // attributes

// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// console.log(logo.designer);

// // non-standard
// console.log(logo.getAttribute('designer'));
// console.log(logo.getAttribute('company', 'caliyow'));
// console.log(logo.getAttribute('company', 'caliyow'));

// Classes;
// const h1 = document.querySelector('.header__title');
// h1.onmouseenter = function (e) {
//   // alert('onmoseenter: Great! You are reading the heading: D');
// };
// h1.onmouseout = function (e) {
//   // alert('Great! You are reading the heading');
// };
// h1.onmouseover = function (e) {
//   // alert('Great! You are reading the heading');
//   h1.style.color = 'red';
// };

// h1.onmouseout = function (e) {
//   h1.style.color = 'green';
// };
// rgb(255, 255, 255);

// // event propagation

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1));
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   // console.log('click');
//   this.style.backgroundColor = randomColor();
//   // stopping propagation
//   // e.stopPropagation();
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   // console.log('click');
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   // console.log('click');
//   this.style.backgroundColor = randomColor();
// });

// // page navigation

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     const id = this.getAttribute('href');
//     console.log(id);
//     e.preventDefault();
//     console.log('LINK');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// // Going downwards

// const h1 = document.querySelector('h1');

// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// // Going downwards

// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// // Selecting sideways(siblings)

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
// const nav = document.querySelector('.nav');
// const section1 = document.querySelector('#section--1');
// nav.addEventListener('mouseover', handleHover.bind(0.5));

// nav.addEventListener('mouseout', handleHover.bind(1));

// sticky navigation
// const initialCords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function () {
//   if (this.window.scrollY > initialCords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');

//   // console.log(window.scrollY);
// });
// style = 'color: #cae30d;';

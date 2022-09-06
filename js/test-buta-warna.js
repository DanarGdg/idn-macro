const dropdown = document.querySelector('.dropdown')
const dropdownText = document.querySelector('.dropbtn')
const dropdownContent = document.querySelector('.dropdown-content')
const arrowDropdown = document.querySelector('.arrow-down')
const hamburgerLogo = document.querySelector('.hamburger-logo')
const searchLogo = document.querySelector('.search-logo')
const searchLogoImg = document.querySelector('.search-logo img')
const navbarTextMobile = document.querySelector('.navbar-text-mobile')
const closeLogo = document.querySelector('.close-logo')
const logoWhite = document.querySelector('.logo img:nth-child(1)')
const logoBlack = document.querySelector('.logo img:nth-child(2)')
const body = document.querySelector('body')
const nav = document.querySelector('nav')
const navbarText = document.querySelectorAll('.navbar-text li')
const arrowDown = document.querySelector('.arrow-down')


dropdown.addEventListener('click', () => {
    arrowDropdown.classList.toggle("active")
    dropdownContent.classList.toggle("active")
})

hamburgerLogo.addEventListener('click', () => {
    searchLogo.classList.toggle('active')
    navbarTextMobile.classList.toggle('active')
    closeLogo.classList.toggle('active')
    logoWhite.classList.toggle('active')
    logoBlack.classList.toggle('active')
    hamburgerLogo.classList.toggle('active')
    body.style.overflow = 'hidden'
    if(navbarTextMobile.classList.contains('active')){
        logoBlack.src = 'assets/icons/logo-black.svg'
    }else{
        logoBlack.src = 'assets/icons/logo.svg'
    }
})

closeLogo.addEventListener('click', () => {
    searchLogo.classList.toggle('active')
    navbarTextMobile.classList.toggle('active')
    closeLogo.classList.toggle('active')
    logoWhite.classList.toggle('active')
    logoBlack.classList.toggle('active')
    hamburgerLogo.classList.toggle('active')
    body.style.overflow = 'auto'
})



const form = document.querySelector('form')
const inputTest = document.querySelectorAll('.input')
const btnSubmit = document.getElementById('btn-submit')
const btnLanjut = document.getElementById('btn-lanjut')
const soals = document.querySelectorAll('.wrapper-soal')
const soalKeBerapa = document.querySelector('.soal-keberapa')
const jawaban = document.querySelectorAll('.jawaban')

// form.addEventListener('submit', () => {
//     console.log('submitted');
// })

// btnSubmit.addEventListener('submit', () => {
//     console.log('submitted');
// })

let position = 0;
let num = 1;



btnLanjut.addEventListener('click', () => {
  console.log(num);
    if(position <= -700){
        position = -700;
        console.log(position);
        soals.forEach(soal => {
            soal.style.transform = `translateX(-${0 - position}%)`
        })
    }else{
        btnLanjut.disabled = true;
        btnLanjut.classList.remove('active')
        position += -100;
        console.log(position);
        num++
        soalKeBerapa.innerText = `${num} dari 8 kuis`
        soals.forEach(soal => {
            soal.style.transform = `translateX(-${0 - position}%)`
        })
    }
})


btnSubmit.addEventListener('click', () => {
  for (let i = 0; i < inputTest.length; i++) {
    const element = inputTest[i];
    // if (!jawaban[num - 1].classList.contains('benar') && !jawaban[num - 1].classList.contains('salah')) {
    //   jawaban[num - 1].innerText = "Isi Jawaban Anda";
    //   jawaban[num - 1].classList.add('blom-Jawab')    
    // }

    // console.log(jawaban[num - 1].classList.contains('benar') && jawaban[num - 1].classList.contains('salah'));

    console.log(jawaban[num - 1]);


    if(element.checked){
      btnLanjut.classList.add('active')
      btnLanjut.disabled = false;
      if (element.value == myQuestions[num - 1].correctAnswer) {
        jawaban[num - 1].classList.add('benar')
        jawaban[num - 1].classList.remove('salah')
        jawaban[num - 1].innerText = "Jawaban Anda Benar"
      }else{
        jawaban[num - 1].classList.add('salah')
        jawaban[num - 1].classList.remove('benar')
        jawaban[num - 1].innerText = "Jawaban Anda Salah"
      }
    }
    // else if(!jawaban[num - 1].classList.contains('benar') && !jawaban[num - 1].classList.contains('salah')){
    //     jawaban[num - 1].innerText = "Isi Jawaban Anda";
    //     jawaban[num - 1].classList.add('blom-Jawab')    
    // }
  }
})

const myQuestions = [
          {
            no:1,
            question:{
                questionText: "Apa yang kamu lihat?",
                questionImg: "assets/images/test-buta-warna-1.png"
            },
            answers: {
              a: "Douglas Crockford",
              b: "Sheryl Sandberg",
              c: "Brendan Eich"
            },
            correctAnswer: "Angka 2"
          },
          {
            no:2,
            question:{
                questionText: "Apa yang kamu lihat?",
                questionImg: "assets/images/test-buta-warna-2.png"
            },
            answers: {
              a: "Node.js",
              b: "TypeScript",
              c: "npm"
            },
            correctAnswer: "Kupu - kupu"
          },
          {
            no:3,
            question:{
                questionText: "Apa yang kamu lihat?",
                questionImg: "assets/images/test-buta-warna-3.png"
            },
            answers: {
              a: "Angular",
              b: "jQuery",
              c: "RequireJS",
              d: "ESLint"
            },
            correctAnswer: "Angka 8"
          },
          {
            no:4,
            question:{
                questionText: "Apa yang kamu lihat?",
                questionImg: "assets/images/test-buta-warna-4.png"
            },
            answers: {
              a: "2",
              b: "5",
              c: "7",
            },
            correctAnswer: "Angka 3"
          },
          {
            no:5,
            question:{
                questionText: "Apa yang kamu lihat?",
                questionImg: "assets/images/test-buta-warna-4.png"
            },
            answers: {
              a: "2",
              b: "5",
              c: "7",
            },
            correctAnswer: "Angka 7"
          },
          {
            no:6,
            question:{
                questionText: "Apa yang kamu lihat?",
                questionImg: "assets/images/test-buta-warna-4.png"
            },
            answers: {
              a: "2",
              b: "5",
              c: "7",
            },
            correctAnswer: "Angka 3"
          },
          {
            no:7,
            question:{
                questionText: "Apa yang kamu lihat?",
                questionImg: "assets/images/test-buta-warna-4.png"
            },
            answers: {
              a: "2",
              b: "5",
              c: "7",
            },
            correctAnswer: "Angka 2"
          },
          {
            no:8,
            question:{
                questionText: "Apa yang kamu lihat?",
                questionImg: "assets/images/test-buta-warna-4.png"
            },
            answers: {
              a: "2",
              b: "5",
              c: "7",
            },
            correctAnswer: "Angka 4"
          },
];

function backToHome(){
  window.location.href = 'index.html'
}

const blog = document.getElementById('blog');
blog.addEventListener('click', () => {
    window.location.href = 'all-blog.html'
})

// lanjut.forEach(lanjut => {
//     lanjut.addEventListener('click', () => {
//         position += -100;
//         instruction.forEach(instruction => {
//             instruction.style.transform = `translateX(-${0 - position}%)`
//         })
//     })
// })

// const kembali = document.querySelectorAll('.kembali');
// kembali.forEach(kembali => {
//     kembali.addEventListener('click', () => {
//         position += 100;
//         instruction.forEach(instruction => {
//             instruction.style.transform = `translateX(-${0 - position}%)`
//         })
//     })
// })

// (function(){
//     // Functions
//     let soalKeBerapa = 1;
//     const keteranganSoal = document.querySelector('.information-question');
    
//     function buildQuiz(){
//       // variable to store the HTML output
//       const output = [];

//       // for each question...
//       myQuestions.forEach(
//         (currentQuestion, questionNumber) => {
  
//           // variable to store the list of possible answers
//           const answers = [];
  
//           // and for each available answer...
//           for(letter in currentQuestion.answers){
  
//             // ...add an HTML radio button
//             answers.push(
//               `<label>
//                 <input type="radio" name="question${questionNumber}" value="${letter}">
//                 ${letter} :
//                 ${currentQuestion.answers[letter]}
//               </label>`
//             );
//           }
  
//           // add this question and its answers to the output
//           output.push(
//             `<div class="slide">
//               <div class="question">
//                 <img src="${currentQuestion.question.questionImg}" alt="gambar test buta warna">
//                 <p>${currentQuestion.question.questionText}</p>
//                </div>
//               <div class="answers"> ${answers.join("")} </div>
//             </div>`
//           );
//         }
//       );
  
//       // finally combine our output list into one string of HTML and put it on the page
//       quizContainer.innerHTML = output.join('');
//     }
  
//     function showResults(){
  
//       // gather answer containers from our quiz
//       const answerContainers = quizContainer.querySelectorAll('.answers');
  
//       // keep track of user's answers
//       let numCorrect = 0;
  
//       // for each question...
//       myQuestions.forEach( (currentQuestion, questionNumber) => {
  
//         // find selected answer
//         const answerContainer = answerContainers[questionNumber];
//         const selector = `input[name=question${questionNumber}]:checked`;
//         const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
//         // if answer is correct
//         if(userAnswer === currentQuestion.correctAnswer){
//           // add to the number of correct answers
//           numCorrect++;
  
//           // color the answers green
//           answerContainers[questionNumber].style.color = 'lightgreen';
//         }
//         // if answer is wrong or blank
//         else{
//           // color the answers red
//           answerContainers[questionNumber].style.color = 'red';
//         }
//       });
  
//       // show number of correct answers out of total
//       resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
//     }
  
//     function showSlide(n) {
//       slides[currentSlide].classList.remove('active-slide');
//       slides[n].classList.add('active-slide');
//       currentSlide = n;
//       if(currentSlide === 0){
//         previousButton.style.display = 'none';
//       }
//       else{
//         previousButton.style.display = 'inline-block';
//       }
//       if(currentSlide === slides.length-1){
//         nextButton.style.display = 'none';
//         submitButton.style.display = 'inline-block';
//       }
//       else{
//         nextButton.style.display = 'inline-block';
//         submitButton.style.display = 'none';
//       }
//     }
  
//     function showNextSlide() {
//       showSlide(currentSlide + 1);
//       soalKeBerapa += 1;
//       console.log(soalKeBerapa);
//       keteranganSoal.innerText = `${soalKeBerapa} dari ${myQuestions.length}`;
//     }
  
//     function showPreviousSlide() {
//       showSlide(currentSlide - 1);
//       soalKeBerapa -= 1;
//       console.log(soalKeBerapa);
//       keteranganSoal.innerText = `${soalKeBerapa} dari ${myQuestions.length}`;
//     }
  
//     // Variables
//     const quizContainer = document.getElementById('quiz');
//     const resultsContainer = document.getElementById('results');
//     const submitButton = document.getElementById('submit');

//     const myQuestions = [
//       {
//         question:{
//             questionText: "Apa yang kamu lihat?",
//             questionImg: "assets/images/test-buta-warna-1.png"
//         },
//         answers: {
//           a: "Douglas Crockford",
//           b: "Sheryl Sandberg",
//           c: "Brendan Eich"
//         },
//         correctAnswer: "c"
//       },
//       {
//         question:{
//             questionText: "Apa yang kamu lihat?",
//             questionImg: "assets/images/test-buta-warna-2.png"
//         },
//         answers: {
//           a: "Node.js",
//           b: "TypeScript",
//           c: "npm"
//         },
//         correctAnswer: "c"
//       },
//       {
//         question:{
//             questionText: "Apa yang kamu lihat?",
//             questionImg: "assets/images/test-buta-warna-3.png"
//         },
//         answers: {
//           a: "Angular",
//           b: "jQuery",
//           c: "RequireJS",
//           d: "ESLint"
//         },
//         correctAnswer: "d"
//       },
//       {
//         question:{
//             questionText: "Apa yang kamu lihat?",
//             questionImg: "assets/images/test-buta-warna-4.png"
//         },
//         answers: {
//           a: "2",
//           b: "5",
//           c: "7",
//         },
//         correctAnswer: "a"
//       }
//     ];

//     keteranganSoal.innerText = `${soalKeBerapa} dari ${myQuestions.length}`;

  
//     // Kick things off
//     buildQuiz();
  
//     // Pagination
//     const previousButton = document.getElementById("previous");
//     const nextButton = document.getElementById("next");
//     const slides = document.querySelectorAll(".slide");
//     let currentSlide = 0;
  
//     // Show the first slide
//     showSlide(currentSlide);
  
//     // Event listeners
//     submitButton.addEventListener('click', showResults);
//     previousButton.addEventListener("click", showPreviousSlide);
//     nextButton.addEventListener("click", showNextSlide);
// })();
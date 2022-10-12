const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators."
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses"
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!"
  }
];

// console.log(faqData[0].answer);
const accordianBody = document.querySelector(".accordian_body");
accordianBody.classList.add("accordian_body");
const faqs = [];

function showFaq() {
  createFaq();
}

function createFaq() {
  for (let i = 0; i < faqData.length; i++) {
    const outer = document.createElement("div");

    const h3 = document.createElement("h3");
    const spanbtn = document.createElement("span");
    const para = document.createElement("div");
    //
    outer.classList.add("faq");
    outer.classList.add("faq_header");
    // h3 element
    h3.classList.add("faq");
    h3.classList.add("h3");
    h3.textContent = faqData[i].question;
    // h3 element with span
    spanbtn.classList.add("show_btn");
    spanbtn.setAttribute("id", faqData[i].id);
    spanbtn.textContent = "+";
    spanbtn.style.display = "flex";
    spanbtn.style.float = "right";
    spanbtn.style.justifyContent = "center";
    h3.insertAdjacentElement("beforeend", spanbtn);
    // another div for answer
    para.classList.add("p");
    para.classList.add("hidden");
    para.textContent = faqData[i].answer;
    // adding to the canvas
    accordianBody.append(outer);
    outer.append(h3);
    outer.append(para);
  }
}

function btnStatusUpdate() {
  const btns = document.querySelectorAll("h3 span");
  const answerPara = document.querySelectorAll("div .p");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      answerPara[btn.id - 1].classList.toggle("hidden");
    });
  });
}

showFaq();
btnStatusUpdate();

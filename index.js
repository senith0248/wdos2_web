fetch("index.json")
  .then((response) => response.json())
  .then((data) => {
    //local storage
    // document.getElementById("maini").innerHTML= data.main.Intro;
    localStorage.setItem("indexData", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("indexData"));

//main heading
document.getElementById("main_heading").innerHTML = data.welcome_sec.main_heading;
document.getElementById("paragraph").innerHTML = data.welcome_sec.paragraph;

//full width section
document.getElementById("wildlife").innerHTML = data.full_width_sec.wildlife;

document.getElementById("paragraph_content").innerHTML = data.paragraph.paragraph_content;

document.getElementById("card_head").innerHTML = data.card_content.card_head;
document.getElementById("card_paragraph").innerHTML = data.card_content.card_paragraph;
document.getElementById("paragraph_head").innerHTML = data.card_content.paragraph_head;


document.getElementById("card_head2").innerHTML = data.card_content2.card_head2;
document.getElementById("card_paragraph_2").innerHTML = data.card_content2.card_paragraph_2;
document.getElementById("paragraph_head2").innerHTML = data.card_content2.paragraph_head2;

document.getElementById("card_head3").innerHTML = data.card_content3.card_head3;
document.getElementById("card_paragraph_3").innerHTML = data.card_content3.card_paragraph_3;
document.getElementById("paragraph_head3").innerHTML = data.card_content3.paragraph_head3;


document.getElementById("card_head4").innerHTML = data.card_content4.card_head4;
document.getElementById("card_head5").innerHTML = data.card_content5.card_head5;

document.addEventListener('DOMContentLoaded', function () {
  const subscribeForm = document.getElementById("subscribeForm");

  subscribeForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const emailInput = document.getElementById('email').value;

      let subscribedEmails = localStorage.getItem('subscribedEmails');
      if (!subscribedEmails) {
          subscribedEmails = [];
      } else {
          subscribedEmails = JSON.parse(subscribedEmails);
      }

      subscribedEmails.push(emailInput);
      localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));

      alert("Thank you for subscribing to our newsletter!");

      console.log("Subscribed Emails:");
      for (const email of subscribedEmails) {
          console.log(email);
      }

     
      document.getElementById('email').value = "";
  });
});

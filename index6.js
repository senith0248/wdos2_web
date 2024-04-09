fetch("index6.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("index6Data", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("index6Data"));

document.getElementById("head").innerHTML = data.overlay.head;
document.getElementById("section_head").innerHTML = data.section.section_head;
document.getElementById("card_head").innerHTML = data.Card.card_head;
document.getElementById("card_2_head").innerHTML = data.card_2.card_2_head;
document.getElementById("card_3_head").innerHTML = data.card_3.card_3_head;
document.getElementById("overlay_2_head").innerHTML = data.overlay_2.overlay_2_head;
document.getElementById("fact").innerHTML = data.overlay_2.fact;
document.getElementById( "head_1").innerHTML = data.section_2.head_1;
document.getElementById("head_2").innerHTML = data.section_2.head_2;
document.getElementById("context").innerHTML = data.section_2.context;
document.getElementById("bold").innerHTML = data.section_2.bold;
document.getElementById("context_2").innerHTML = data.section_2.context_2;
document.getElementById( "bold_1").innerHTML = data.section_2.bold_1;
document.getElementById("context_3").innerHTML = data.section_2.context_3;
document.getElementById("context_4").innerHTML = data.section_2.context_4;
document.getElementById( "head_3").innerHTML = data.section_2.head_3;
document.getElementById( "context_5").innerHTML = data.section_2.context_5;
document.getElementById( "bold_2").innerHTML = data.section_2.bold_2;
document.getElementById("paragraph").innerHTML = data.section_2.bold_3;
document.getElementById( "bold_3").innerHTML = data.section_2.bold_3;
document.getElementById("paragraph_2").innerHTML = data.section_2.paragraph_2;
document.getElementById("paragraph_3").innerHTML = data.section_2.paragraph_3;


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
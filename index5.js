fetch("index5.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("index5Data", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("index5Data"));

document.getElementById("head").innerHTML = data.overlay.head;
document.getElementById("content").innerHTML = data.overlay.content;
document.getElementById("yala_head").innerHTML = data.yala.yala_head;
document.getElementById("yala_paragraph").innerHTML = data.yala.yala_paragraph;
document.getElementById("yala_paragraph2").innerHTML = data.yala.yala_paragraph2;
document.getElementById("yala-paragraph3").innerHTML = data.yala.yala-paragraph3;
document.getElementById("head").innerHTML = data.yala_safari.head;
document.getElementById("yala_safari1_head").innerHTML = data.yala_safari1.yala_safari1_head;
document.getElementById("yala_safari1_paragraph").innerHTML = data.yala_safari1.yala_safari1_paragraph;
document.getElementById("yala-safari2_head").innerHTML = data.yala_safari2.yala-safari2_head;
document.getElementById("yala_safari2_paragraph").innerHTML = data.yala_safari2.yala_safari2_paragraph;
document.getElementById("yala-safari3_head").innerHTML = data.yala_safari.yala-safari3_head;
document.getElementById("yala_safari3_head").innerHTML = data.yala_safari.yala_safari3_head;


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
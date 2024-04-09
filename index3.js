fetch("index3.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("index3Data", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("index3Data"));

document.getElementById("overlay_head").innerHTML = data.overlay.overlay_head;
document.getElementById("overlay_paragraph").innerHTML = data.overlay.overlay_paragraph;

document.getElementById("willpattu_head").innerHTML = data.willpattu.willpattu_head;
document.getElementById("paragraph").innerHTML = data.willpattu.paragraph;
document.getElementById("willpattu_paragraph2").innerHTML = data.willpattu.willpattu_paragraph2;
document.getElementById("willpattu_paragraph3").innerHTML = data.willpattu.willpattu_paragraph3;


document.getElementById("willpattu_safari_head").innerHTML = data.willpattu_safari.willpattu_safari_head;

document.getElementById("heading").innerHTML = data.willpattu_safari1.heading;
document.getElementById("content").innerHTML = data.willpattu_safari1.content;

document.getElementById("heading2").innerHTML = data.willpattu_safari2.heading2;
document.getElementById("content2").innerHTML = data.willpattu_safari2.content2;

document.getElementById("heading3").innerHTML = data.willpattu_safari3.heading3;
document.getElementById("content3").innerHTML = data.willpattu_safari3.content3;

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
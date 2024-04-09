fetch("index7.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("index7Data", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("index7Data"));
 document.getElementById("head1").innerHTML = data.overlay.head1;
document.getElementById("heading").innerHTML = data.head2.heading;

document.getElementById("title").innerHTML = data.grid.title;
document.getElementById("paragraph").innerHTML = data.grid.paragraph;

document.getElementById("head_1").innerHTML = data.grid_2.head_1;
document.getElementById("context").innerHTML = data.grid_2.context;

document.getElementById("head_2").innerHTML = data.grid_3.head_2;
document.getElementById("explanation").innerHTML = data.grid_3.explanation;

document.getElementById("head_3").innerHTML = data.grid_4.head_3;
document.getElementById("paragraph_4").innerHTML = data.grid_4.paragraph_4;

document.getElementById("head_4").innerHTML = data.grid_5.head_4;
document.getElementById("essay").innerHTML = data.grid_5.paragraph_5;


document.getElementById("head_5").innerHTML = data.card.head_5;
document.getElementById("head2").innerHTML = data.card2.head2;


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
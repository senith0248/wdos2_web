fetch("index2.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("index2Data", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("index2Data"));

document.getElementById("head").innerHTML = data.overlay.head;
document.getElementById("para").innerHTML = data.overlay.para;

document.getElementById("content_head").innerHTML = data.content.content_head;
document.getElementById("content_para").innerHTML =  data.content_1.content_para;

document.getElementById("title_head").innerHTML = data.overlay_2.title_head;

document.getElementById("walawa_head").innerHTML = data.Udawalawa.walawa_head;
document.getElementById("walawa_paragraph").innerHTML = data.Udawalawa.walawa_paragraph;

document.getElementById("overlay_3_head").innerHTML = data.overlay_3.overlay_3_head;

document.getElementById("head_over").innerHTML = data.gal_oya.head_over;
document.getElementById("about1").innerHTML =  data.gal_oya.about1;

document.getElementById("lay_head").innerHTML = data.overlay_4.lay_head;

document.getElementById("head1").innerHTML = data.kumana.head1;
document.getElementById("about").innerHTML = data.kumana.about;

document.getElementById("head2").innerHTML = data.heading.head;

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
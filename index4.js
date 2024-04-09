fetch("index4.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("index4Data", JSON.stringify(data));
  })
  .catch((error) => {
    console.error("Error", error);
  });
const data = JSON.parse(localStorage.getItem("index4Data"));

document.getElementById("overlay_head").innerHTML = data.overlay.overlay_head;
document.getElementById("overlay_cont").innerHTML = data.overlay.overlay_cont;

document.getElementById("content_head").innerHTML = data.content.content_head;

document.getElementById("wildlife").innerHTML = data.content2.wildlife;
document.getElementById("information").innerHTML = data.content2.information;

document.getElementById("gallery_content_head").innerHTML = data.gallery_content.gallery_content_head;

document.getElementById("gallery_item_head").innerHTML =  data.gallery_item.gallery_item_head;

document.getElementById("gallery_item_head2").innerHTML =  data.gallery_item2.gallery_item_head2;

document.getElementById("gallery_item_head3").innerHTML = data.gallery_item3.gallery_item_head3;

document.getElementById("gallery_item_head4").innerHTML = data.gallery_item4.gallery_item_head4;

document.getElementById("gallery_item_head5").innerHTML = data.gallery_item5.gallery_item_head5;

document.getElementById("gallery_item_head6").innerHTML = data.gallery_item6.gallery_item_head6;

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
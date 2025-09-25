  // function givealart(){
  // document.getElementById('contact-form').addEventListener('submit', function(event) {
  //   event.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
  //     .then(() => {
  //       alert('Message sent successfully!');
  //       this.reset(); // Clear the form
  //     }, (error) => {
  //       alert('Failed to send message. Please try again later.');
  //       console.error(error);
  //     });
  // });
  // }

  // // <script type="text/javascript">
  // (function(){
  //    emailjs.init("sangi2804@gmail.com"); // Replace with your EmailJS User ID
  // })();


  // Load EmailJS SDK (must be included in HTML first)
// <script src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>

(function () {
  emailjs.init("aPgRra89pjXqN-ne6"); // Replace with your actual EmailJS Public Key
})();

function givealart(event) {
  event.preventDefault(); // prevent page reload

  const form = document.getElementById("contact-form");

  emailjs.sendForm("service_ughddrc", "template_lb8vp8b", form)
    .then(() => {
      alert("✅ Message sent successfully!");
      form.reset(); // Clear form
    })
    .catch((error) => {
      alert("❌ Failed to send message. Please try again later.");
      console.error("EmailJS error:", error);
    });
}


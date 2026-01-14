// current year
    document.getElementById("year").textContent = new Date().getFullYear();




    document.getElementById('showFullPortfolio').addEventListener('click', function() {
    // पूरे पोर्टफोलियो सेक्शन को दिखाना
    var fullPortfolioSection = document.querySelector('#fullPortfolioSection');
    if (fullPortfolioSection) {
      fullPortfolioSection.style.display = 'block';
      // बटन को हटा देना या छुपाना
      this.style.display = 'none';
    }
  });



   document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // फॉर्म का डिफ़ॉल्ट सबमिशन रोकें
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const project = document.getElementById('project').value;
    const message = document.getElementById('message').value;
    alert(`Thank you, ${name}! Your message has been received.`);
    // यहाँ आप AJAX या Email API का इस्तेमाल कर सकते हैं डेटा भेजने के लिए
  });



 
const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const response = await fetch("https://formspree.io/f/abcdwxyz", {
    method: "POST",
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    window.location.href = "/thank-you.html";
  } else {
    alert("Something went wrong. Try again.");
  }
});

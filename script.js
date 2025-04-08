
document.getElementById("subscribe-form").addEventListener("submit", async function(e) {
   e.preventDefault();
 
   const form = e.target;
 
   const formData = new FormData();
   formData.append("email", form.email.value);
   formData.append("phone", form.phone.value);
   formData.append("wish", form.wish.value);
 
   try {
     await fetch("https://script.google.com/macros/s/AKfycbzHLcAtWIzgAKokuyvhUTwFlrWm9Sw5dxVoEnH7YzluYrZG3niHLBAwH0_fTHv-N__1/exec", {
       method: "POST",
       mode: "no-cors",
       body: formData,
     });
 
     document.getElementById("response-message").textContent = "✅ Дякуємо! Ви будете серед перших!";
     form.reset();
 
   } catch (error) {
     document.getElementById("response-message").textContent = "⚠️ Помилка з'єднання. Спробуйте пізніше.";
     console.error("Fetch error:", error);
   }
 });
 
 // Таймер запуску
 const targetDate = new Date("2025-05-01T00:00:00").getTime();
 const countdownEl = document.getElementById("countdown");
 
 setInterval(() => {
   const now = new Date().getTime();
   const distance = targetDate - now;
   if (distance < 0) {
     countdownEl.innerHTML = "🚀 Ми вже запустились!";
     return;
   }
 
   const days = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hrs = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const secs = Math.floor((distance % (1000 * 60)) / 1000);
 
   countdownEl.innerHTML = `${days}д ${hrs}г ${mins}хв ${secs}с`;
 }, 1000);
 
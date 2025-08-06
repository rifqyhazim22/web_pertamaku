console.log("Selamat datang di web pertamaku!");

document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  h1.addEventListener("click", () => {
    alert("Kamu mengklik judul halaman!");
  });
});

const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = link.getAttribute("href").substring(1);

    sections.forEach(sec => sec.classList.remove("active"));
    document.getElementById(target).classList.add("active");
  });
});

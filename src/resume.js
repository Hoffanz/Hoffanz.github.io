document.getElementById("cv-section").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./dist/Resume - 26-03.pdf";
  link.download = "Resume - 26-03.pdf";
  link.click();
});

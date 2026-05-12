document.getElementById("cv-section").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "./dist/Jonathan_Hakansson_CV_EN.pdf";
  link.download = "Jonathan_Hakansson_CV_EN.pdf";
  link.click();
});

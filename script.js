function changeTeacher(type) {
  const img = document.getElementById("teacherImage");
  const title = document.getElementById("teacherTitle");
  const desc = document.getElementById("teacherDesc");

  if (type === 1) {
    img.src = "images/teacher1.png";
    title.textContent = "Professional Teacher";
    desc.textContent = "Responsible, calm, and highly reliable.";
  }

  if (type === 2) {
    img.src = "images/teacher2.png";
    title.textContent = "Modern Educator";
    desc.textContent = "Adaptive, creative, and student-focused.";
  }

  if (type === 3) {
    img.src = "images/teacher3.png";
    title.textContent = "Strategic Mentor";
    desc.textContent = "Analytical, visionary, and results-driven.";
  }
}

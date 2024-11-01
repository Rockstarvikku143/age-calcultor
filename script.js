function calculateAge() {
  const birthdate = document.getElementById('birthdate').value;
  if (birthdate) {
    const birthDate = new Date(birthdate);
    const now = new Date();
    
    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours() - birthDate.getHours();
    let minutes = now.getMinutes() - birthDate.getMinutes();
    let seconds = now.getSeconds() - birthDate.getSeconds();

    if (seconds < 0) {
      seconds += 60;
      minutes--;
    }
    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      months--;
      const lastMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += lastMonth.getDate();
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    const display = document.getElementById('display');
    const ageText = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
    flipEffect(display, ageText);
  }
}

function flipEffect(element, newText) {
  element.classList.add("flip");
  setTimeout(() => {
    element.textContent = newText;
    element.classList.remove("flip");
  }, 300);
}
// Toggle mobile menu visibility
function toggleMenu() {
    const menu = document.getElementById('nav-links');
    menu.classList.toggle('active');
  }
  

  // Close the menu when clicking outside of it
document.addEventListener('click', function (event) {
    const menu = document.getElementById('nav-links');
    const menuIcon = document.querySelector('.mobile-menu-icon');
    
    // Check if the click was outside the menu and the menu icon
    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
      menu.classList.remove('active'); // Close the menu
    }
  });


  
function showTab(tab, btn) {
  const tabs = ['education', 'system', 'achievements'];
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
  if (tab === 'all') {
    tabs.forEach(t => {
      document.getElementById('tab-' + t).classList.add('active');
    });
  } else {
    tabs.forEach(t => {
      if (t === tab) {
        document.getElementById('tab-' + t).classList.add('active');
      }
    });
  }
}
window.onload = function() {
  showTab('all', document.querySelector('.tab-btn.active'));
  type();
};


document.querySelectorAll('.popup-img').forEach(img => {
  img.onclick = function() {
    document.getElementById('imgModal').style.display = "block";
    document.getElementById('imgModalSrc').src = this.getAttribute('data-img');
  }
});
document.querySelector('.img-modal-close').onclick = function() {
  document.getElementById('imgModal').style.display = "none";
}
window.onclick = function(event) {
  if (event.target == document.getElementById('imgModal')) {
    document.getElementById('imgModal').style.display = "none";
  }
}


const text = "A passionate web developer specialized in creating modern, responsive websites. Let's work together to build something great!";
const typewriter = document.getElementById('typewriter');
let i = 0;
function type() {
  typewriter.innerHTML = ""; // Reset text
  i = 0; // Reset index
  typeWriterStep();
}
function typeWriterStep() {
  if (i < text.length) {
    typewriter.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriterStep, 20); // Adjust typing speed here
  }
}

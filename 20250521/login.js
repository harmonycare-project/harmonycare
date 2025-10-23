document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const confirmBtn = document.getElementById('confirmBtn');

  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!username || !email || !password) {
      alert('이름, 이메일, 비밀번호를 모두 입력해주세요.');
      return;
    }

  
    welcomeMessage.style.display = 'flex';
  });

  confirmBtn.addEventListener('click', () => {
    
    window.location.href = 'main.html';
  });
});
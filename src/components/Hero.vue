<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const text = document.querySelector('.typing-text');
  const roles = ['Desenvolvedor Frontend', 'Desenvolvedor Backend', 'Fullstack Developer'];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function type() {
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      text.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 50;
    } else {
      text.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 150;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1500; // Pausa antes de começar a apagar
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500; // Pausa antes de começar a digitar novamente
    }

    setTimeout(type, typingSpeed);
  }

  setTimeout(type, 1000);
});
</script>

<template>
  <section id="home" class="hero">
    <div class="hero-content">
      <h1>Olá, eu sou <span class="highlight">Nicolas Freitas</span></h1>
      <div class="typing-container">
        <span class="typing-text"></span>
        <span class="cursor">|</span>
      </div>
      <p class="hero-description">
        Transformando ideias em soluções digitais com código limpo e design moderno.
      </p>
      <div class="hero-buttons">
        <a href="#contact" class="btn primary">Entre em contato</a>
        <a href="#projects" class="btn secondary">Ver projetos</a>
      </div>
      <div class="social-links">
        <a href="https://github.com/Nicolasnola" target="_blank" aria-label="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/nicolasfreitasfarias/" target="_blank" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <!-- <a href="#" target="_blank" aria-label="Twitter">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
          </svg>
        </a> -->
      </div>
    </div>
    <div class="scroll-down">
      <a href="#about">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
        </svg>
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  padding-top: 60px;
}

.hero-content {
  max-width: 800px;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.highlight {
  background: linear-gradient(90deg, #646cff, #42b883);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.typing-container {
  font-size: 2rem;
  font-weight: 600;
  height: 3rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.hero-description {
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.btn {
  padding: 0.8rem 1.8rem;
  border-radius: 30px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
}

.primary {
  background: linear-gradient(90deg, #646cff, #42b883);
  color: white;
  border: none;
}

.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.secondary {
  border: 2px solid #646cff;
  color: #646cff;
  background: transparent;
}

:global(.dark-mode) .secondary {
  border-color: #42b883;
  color: #42b883;
}

.secondary:hover {
  background: rgba(100, 108, 255, 0.1);
  transform: translateY(-3px);
}

:global(.dark-mode) .secondary:hover {
  background: rgba(66, 184, 131, 0.1);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
}

.social-links a {
  color: #333;
  transition: color 0.3s, transform 0.3s;
}

:global(.dark-mode) .social-links a {
  color: #f5f5f5;
}

.social-links a:hover {
  color: #646cff;
  transform: translateY(-3px);
}

:global(.dark-mode) .social-links a:hover {
  color: #42b883;
}

.scroll-down {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
}

.scroll-down a {
  color: #333;
  transition: color 0.3s;
}

:global(.dark-mode) .scroll-down a {
  color: #f5f5f5;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0) translateX(-50%); }
  40% { transform: translateY(-20px) translateX(-50%); }
  60% { transform: translateY(-10px) translateX(-50%); }
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .typing-container {
    font-size: 1.5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    width: 80%;
    margin: 0 auto 2rem;
  }
}
</style>
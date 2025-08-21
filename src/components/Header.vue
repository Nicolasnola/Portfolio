<script setup>
import { ref } from 'vue';

defineProps({
  darkMode: Boolean
});

defineEmits(['toggle-dark-mode']);

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <h1>DevPortfolio</h1>
      </div>
      
      <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <nav :class="{ 'active': isMenuOpen }">
        <ul>
          <li><a href="#home" @click="closeMenu">Home</a></li>
          <li><a href="#about" @click="closeMenu">Sobre</a></li>
          <li><a href="#skills" @click="closeMenu">Habilidades</a></li>
          <li><a href="#projects" @click="closeMenu">Projetos</a></li>
          <li><a href="#contact" @click="closeMenu">Contato</a></li>
          <li>
            <button @click="$emit('toggle-dark-mode')" class="theme-toggle" aria-label="Toggle dark mode">
              <span v-if="darkMode">☀️</span>
              <span v-else>🌙</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

:global(.dark-mode) .header {
  background-color: rgba(18, 18, 18, 0.95);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(90deg, #646cff, #42b883);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin-left: 2rem;
}

nav ul li a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  position: relative;
}

:global(.dark-mode) nav ul li a {
  color: #f5f5f5;
}

nav ul li a::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #646cff, #42b883);
  transition: width 0.3s;
}

nav ul li a:hover::after {
  width: 100%;
}

.theme-toggle {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
}

.menu-toggle span {
  width: 100%;
  height: 3px;
  background-color: #333;
  border-radius: 10px;
  transition: all 0.3s linear;
}

:global(.dark-mode) .menu-toggle span {
  background-color: #f5f5f5;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }
  
  nav {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: white;
    padding: 80px 20px 20px;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
  
  :global(.dark-mode) nav {
    background-color: #1a1a1a;
  }
  
  nav.active {
    right: 0;
  }
  
  nav ul {
    flex-direction: column;
  }
  
  nav ul li {
    margin: 1.5rem 0;
  }
}
</style>
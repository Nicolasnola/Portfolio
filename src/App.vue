<script setup>
import { ref } from 'vue';
import Header from './components/Header.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

const darkMode = ref(false);

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  document.body.classList.toggle('dark-mode');
};
</script>

<template>
  <div :class="{ 'dark-mode': darkMode }" class="app-container">
    <Header @toggle-dark-mode="toggleDarkMode" :dark-mode="darkMode" />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<style>
.app-container {
  min-height: 100vh;
  transition: background-color 0.3s, color 0.3s;
}

main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

section {
  padding: 5rem 0;
}

.section-title {
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 4px;
  background-color: #646cff;
}

.dark-mode {
  background-color: #121212;
  color: #f5f5f5;
}

.dark-mode .section-title::after {
  background-color: #42b883;
}

@media (max-width: 768px) {
  main {
    padding: 0 1rem;
  }
  
  section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
}
</style>

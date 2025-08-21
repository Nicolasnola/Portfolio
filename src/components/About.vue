<script setup>
  // import minhaFoto from '@/assets/nicolas.jpg';
</script>
<template>
  <section id="about" class="about">
    <h2 class="section-title">Sobre Mim</h2>
    <div class="about-content">
      <div class="about-image">
        <div class="image-container">
          <!-- <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="profile-placeholder">
            <circle cx="100" cy="70" r="50" fill="currentColor" />
            <circle cx="100" cy="60" r="10" fill="#fff" />
            <path d="M100 220 Q 150 160, 100 120 Q 50 160, 100 220" fill="currentColor" />
          </svg> -->
          
            <img src="/src/assets/images/foto.jpg" alt="Minha foto de perfil" class="profile-image" />
          
        </div>
      </div>
      <div class="about-text">
        <h3>Desenvolvedor Fullstack</h3>
        <p>
          Olá! Sou um desenvolvedor fullstack apaixonado por criar soluções web inovadoras e funcionais. 
          Com experiência em desenvolvimento frontend e backend, estou sempre buscando aprender novas tecnologias 
          e aprimorar minhas habilidades.
        </p>
        <p>
          Minha jornada na programação começou há alguns anos, e desde então tenho trabalhado em diversos projetos, 
          desde aplicações web complexas até sites responsivos. Sou especialista em JavaScript e PHP e seus frameworks, 
          como Vue.js, React, Node.js e Laravel.
        </p>
        <p>
          Além do desenvolvimento, tenho forte interesse em UX/UI design, garantindo que minhas aplicações 
          não sejam apenas funcionais, mas também intuitivas e agradáveis de usar.
        </p>
        <div class="about-details">
          <div class="detail">
            <span class="detail-title">Nome:</span>
            <span class="detail-value">Nicolas Freitas</span>
          </div>
          <div class="detail">
            <span class="detail-title">Email:</span>
            <span class="detail-value">nicolas.freitasdev@gmail.com</span>
          </div>
          <div class="detail">
            <span class="detail-title">Localização:</span>
            <span class="detail-value">Volta Redonda-RJ, Brasil</span>
          </div>
          <div class="detail">
            <span class="detail-title">Disponibilidade:</span>
            <span class="detail-value">Freelance / Contrato</span>
          </div>
        </div>
        <div class="about-buttons">
          <a href="#" class="btn primary">Download CV</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 6rem 0;
}

.about-content {
  display: flex;
  gap: 4rem;
  align-items: center;
}

.about-image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image-container {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #646cff, #42b883);
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile-placeholder {
  width: 80%;
  height: 80%;
  color: rgba(255, 255, 255, 0.8);
}
/* Adicione este novo seletor */
.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.about-text {
  flex: 2;
}

.about-text h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #646cff;
}

:global(.dark-mode) .about-text h3 {
  color: #42b883;
}

.about-text p {
  margin-bottom: 1.2rem;
  line-height: 1.7;
}

.about-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin: 2rem 0;
}

.detail {
  display: flex;
}

.detail-title {
  font-weight: 600;
  margin-right: 0.5rem;
  color: #646cff;
}

:global(.dark-mode) .detail-title {
  color: #42b883;
}

.about-buttons {
  margin-top: 2rem;
}

@media (max-width: 992px) {
  .about-content {
    flex-direction: column;
    gap: 2rem;
  }
  
  .about-image {
    order: -1;
  }
  
  .image-container {
    width: 250px;
    height: 250px;
  }
  
  .about-details {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .image-container {
    width: 200px;
    height: 200px;
  }
}
</style>
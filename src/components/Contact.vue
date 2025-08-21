<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const subject = ref('');
const message = ref('');
const isSubmitting = ref(false);
const submitStatus = ref(null);

const handleSubmit = async () => {
  isSubmitting.value = true;
  
  // Simulação de envio de formulário
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulação de sucesso
  submitStatus.value = 'success';
  isSubmitting.value = false;
  
  // Limpar formulário após envio bem-sucedido
  name.value = '';
  email.value = '';
  subject.value = '';
  message.value = '';
  
  // Limpar status após alguns segundos
  setTimeout(() => {
    submitStatus.value = null;
  }, 5000);
};
</script>

<template>
  <section id="contact" class="contact">
    <h2 class="section-title">Entre em Contato</h2>
    
    <div class="contact-container">
      <div class="contact-info">
        <h3>Vamos conversar!</h3>
        <p>
          Estou disponível para trabalhos freelance, projetos de longo prazo ou apenas para trocar ideias sobre tecnologia.
          Sinta-se à vontade para entrar em contato comigo usando o formulário ou através dos canais abaixo.
        </p>
        
        <div class="contact-methods">
          <div class="contact-method">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="contact-details">
              <h4>Email</h4>
              <a href="mailto:nicolas.freitasdev@gmail.com">nicolas.freitasdev@gmail.com</a>
            </div>
          </div>
          
          <div class="contact-method">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="contact-details">
              <h4>Localização</h4>
              <p>Volta Redonda-RJ, Brasil</p>
            </div>
          </div>
          
          <div class="contact-method">
            <div class="contact-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="contact-details">
              <h4>Telefone</h4>
              <a href="tel:+5511999999999">+55 (24) 99826-7908</a>
            </div>
          </div>
        </div>
        
        <div class="social-links">
          <a href="https://github.com/Nicolasnola" target="_blank" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/nicolasfreitasfarias" target="_blank" aria-label="LinkedIn">
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
      
      <div class="contact-form">
        <form @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="name">Nome</label>
            <input 
              type="text" 
              id="name" 
              v-model="name" 
              required 
              placeholder="Seu nome"
            />
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              type="email" 
              id="email" 
              v-model="email" 
              required 
              placeholder="seu.email@exemplo.com"
            />
          </div>
          
          <div class="form-group">
            <label for="subject">Assunto</label>
            <input 
              type="text" 
              id="subject" 
              v-model="subject" 
              required 
              placeholder="Assunto da mensagem"
            />
          </div>
          
          <div class="form-group">
            <label for="message">Mensagem</label>
            <textarea 
              id="message" 
              v-model="message" 
              required 
              rows="5" 
              placeholder="Sua mensagem aqui..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            class="btn primary" 
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting">Enviando...</span>
            <span v-else>Enviar Mensagem</span>
          </button>
          
          <div v-if="submitStatus === 'success'" class="form-success">
            Mensagem enviada com sucesso! Entrarei em contato em breve.
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 6rem 0;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 3rem;
}

.contact-info h3 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #646cff;
}

:global(.dark-mode) .contact-info h3 {
  color: #42b883;
}

.contact-info p {
  margin-bottom: 2rem;
  line-height: 1.7;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.contact-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #646cff, #42b883);
  border-radius: 50%;
  color: white;
}

.contact-details h4 {
  font-size: 1.1rem;
  margin-bottom: 0.3rem;
}

.contact-details a {
  color: #646cff;
  text-decoration: none;
  transition: color 0.3s;
}

:global(.dark-mode) .contact-details a {
  color: #42b883;
}

.contact-details a:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
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

.contact-form {
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

:global(.dark-mode) .contact-form {
  background-color: #1a1a1a;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  transition: border-color 0.3s;
  background-color: white;
  color: #333;
}

:global(.dark-mode) .form-group input,
:global(.dark-mode) .form-group textarea {
  border-color: #444;
  background-color: #2a2a2a;
  color: #f5f5f5;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #646cff;
}

:global(.dark-mode) .form-group input:focus,
:global(.dark-mode) .form-group textarea:focus {
  border-color: #42b883;
}

.form-success {
  margin-top: 1rem;
  padding: 0.8rem;
  background-color: rgba(66, 184, 131, 0.1);
  border-left: 4px solid #42b883;
  color: #42b883;
  border-radius: 4px;
}

@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    id: 1,
    title: 'E-commerce App',
    description: 'Plataforma de e-commerce completa com carrinho de compras, pagamentos e painel administrativo.',
    image: 'ecommerce',
    tags: ['Vue.js', 'Node.js', 'MongoDB', 'Express'],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 2,
    title: 'Task Manager',
    description: 'Aplicativo de gerenciamento de tarefas com recursos de arrastar e soltar, filtros e notificações.',
    image: 'taskmanager',
    tags: ['React', 'Firebase', 'Material UI'],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 3,
    title: 'Blog Platform',
    description: 'Plataforma de blog com editor de texto rico, sistema de comentários e análises.',
    image: 'blog',
    tags: ['Vue.js', 'Django', 'PostgreSQL'],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Aplicativo de previsão do tempo com geolocalização e visualizações de dados em tempo real.',
    image: 'weather',
    tags: ['JavaScript', 'API', 'CSS3'],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 5,
    title: 'Social Network',
    description: 'Rede social com recursos de chat em tempo real, compartilhamento de mídia e notificações.',
    image: 'social',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    demoUrl: '#',
    codeUrl: '#'
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'Aplicativo para rastreamento de exercícios com gráficos de progresso e planos de treinamento.',
    image: 'fitness',
    tags: ['Vue.js', 'Chart.js', 'Express', 'MySQL'],
    demoUrl: '#',
    codeUrl: '#'
  }
]);

const getProjectImage = (image) => {
  // Esta função seria usada para carregar imagens reais
  // Por enquanto, retornamos um gradiente baseado no nome do projeto
  const colors = {
    ecommerce: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
    taskmanager: 'linear-gradient(135deg, #10B981, #3B82F6)',
    blog: 'linear-gradient(135deg, #F59E0B, #EF4444)',
    weather: 'linear-gradient(135deg, #3B82F6, #EC4899)',
    social: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
    fitness: 'linear-gradient(135deg, #10B981, #F59E0B)'
  };
  
  return colors[image] || 'linear-gradient(135deg, #646cff, #42b883)';
};
</script>

<template>
  <section id="projects" class="projects">
    <h2 class="section-title">Meus Projetos</h2>
    
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.id" class="project-card">
        <div class="project-image" :style="{ background: getProjectImage(project.image) }">
          <div class="project-overlay">
            <div class="project-links">
              <a :href="project.demoUrl" target="_blank" class="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
                Demo
              </a>
              <a :href="project.codeUrl" target="_blank" class="project-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
                Código
              </a>
            </div>
          </div>
        </div>
        <div class="project-info">
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <div class="project-tags">
            <span v-for="(tag, index) in project.tags" :key="index" class="project-tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
    
    <div class="projects-more">
      <a href="#" class="btn secondary">Ver mais projetos</a>
    </div>
  </section>
</template>

<style scoped>
.projects {
  padding: 6rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.project-card {
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: white;
}

:global(.dark-mode) .project-card {
  background-color: #1a1a1a;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.project-image {
  height: 200px;
  position: relative;
  overflow: hidden;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  background-color: white;
  color: #333;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
}

.project-link:hover {
  background-color: #646cff;
  color: white;
}

:global(.dark-mode) .project-link:hover {
  background-color: #42b883;
}

.project-info {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.3rem;
  margin-bottom: 0.8rem;
  color: #333;
}

:global(.dark-mode) .project-title {
  color: #f5f5f5;
}

.project-description {
  color: #666;
  margin-bottom: 1.2rem;
  line-height: 1.6;
}

:global(.dark-mode) .project-description {
  color: #aaa;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.project-tag {
  padding: 0.3rem 0.8rem;
  background-color: #f0f0f0;
  border-radius: 20px;
  font-size: 0.8rem;
  color: #333;
}

:global(.dark-mode) .project-tag {
  background-color: #2a2a2a;
  color: #ddd;
}

.projects-more {
  margin-top: 3rem;
  text-align: center;
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
}
</style>
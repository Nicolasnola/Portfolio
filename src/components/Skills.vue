<script setup>
import htmlLogo from '../assets/images/logos/html5.svg';
import cssLogo from '../assets/images/logos/css.svg';
import javascriptLogo from '../assets/images/logos/javascript.svg';
import vueLogo from '../assets/images/logos/vuejs.svg';
import reactLogo from '../assets/images/logos/react.svg';
import phpLogo from '../assets/images/logos/php.svg';
import laravelLogo from '../assets/images/logos/laravel.svg';
import filamentLogo from '../assets/images/logos/filament.svg';
import mysqlLogo from '../assets/images/logos/mysql.svg';
import postgresLogo from '../assets/images/logos/postgresql.svg';
import mongodbLogo from '../assets/images/logos/mongodb.svg';
import sqliteLogo from '../assets/images/logos/sqlite.svg';
import nodeLogo from '../assets/images/logos/nodedotjs.svg';


const frontendSkills = [
  { name: 'HTML', logo: htmlLogo },
  { name: 'CSS', logo: cssLogo },
  { name: 'JavaScript', logo: javascriptLogo },
  { name: 'Vue.js', logo: vueLogo },
  { name: 'React', logo: reactLogo },
];

const backendSkills = [
  { name: 'Node.js', logo: nodeLogo },
  { name: 'PHP', logo: phpLogo },
  { name: 'Laravel', logo: laravelLogo },
  { name: 'Filament PHP', logo: filamentLogo },
];

const databaseSkills = [
  { name: 'MySQL', logo: mysqlLogo },
  { name: 'Postgres', logo: postgresLogo },
  { name: 'MongoDB', logo: mongodbLogo },
  { name: 'SQLite', logo: sqliteLogo },
];
</script>

<template>
  <section id="skills" class="skills">
    <h2 class="section-title">Minhas Habilidades</h2>
    
    <div class="skills-container">
      <div class="skills-category">
        <h3>Frontend</h3>
        <div class="skills-grid">
          <div v-for="skill in frontendSkills" :key="skill.name" class="skill-card">
            <div class="skill-icon">
              <img :src="skill.logo" :alt="`${skill.name} Logo`" class="skill-logo" />
            </div>
            <span class="skill-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>
      
      <div class="skills-category">
        <h3>Backend</h3>
        <div class="skills-grid">
          <div v-for="skill in backendSkills" :key="skill.name" class="skill-card">
            <div class="skill-icon">
              <img :src="skill.logo" :alt="`${skill.name} Logo`" class="skill-logo" />
            </div>
            <span class="skill-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>
      
      <div class="skills-category">
        <h3>Banco de Dados</h3>
        <div class="skills-grid">
          <div v-for="skill in databaseSkills" :key="skill.name" class="skill-card">
            <div class="skill-icon">
              <img :src="skill.logo" :alt="`${skill.name} Logo`" class="skill-logo" />
            </div>
            <span class="skill-name">{{ skill.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2.5rem;
  position: relative;
}

.section-title:after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4776E6, #8E54E9);
  border-radius: 2px;
}

.skills-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.skills-category {
  margin-bottom: 3rem;
}

.skills-category h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  position: relative;
  display: inline-block;
  padding-bottom: 8px;
}

.skills-category h3:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, #4776E6, #8E54E9);
  border-radius: 1.5px;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 1.8rem 1rem;
  border-radius: 12px;
  background: linear-gradient(145deg, #f0f0f0, #ffffff);
  box-shadow: 0 4px 15px rgba(100, 108, 255, 0.08);
  transition: all 0.3s ease;
  height: 140px;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(100, 108, 255, 0.15);
  background: linear-gradient(145deg, #f5f5ff, #ffffff);
}

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  box-shadow: 0 4px 10px rgba(100, 108, 255, 0.12);
  margin-bottom: 1rem;
}

.skill-logo {
  width: 32px;
  height: 32px;
}

.skill-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: #333;
}

/* Estilo para o modo escuro */
:global(.dark-mode) .skills-category h3 {
  color: #f1f1f1;
}

:global(.dark-mode) .skill-card {
  background: linear-gradient(145deg, #222222, #2a2a2a);
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.1);
}

:global(.dark-mode) .skill-card:hover {
  box-shadow: 0 8px 20px rgba(66, 184, 131, 0.2);
  background: linear-gradient(145deg, #252525, #2d2d2d);
}

:global(.dark-mode) .skill-icon {
  background: linear-gradient(145deg, #2a2a2a, #333333);
  box-shadow: 0 4px 10px rgba(66, 184, 131, 0.15);
}

:global(.dark-mode) .skill-name {
  color: #f1f1f1;
}

/* Responsividade */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
  }
  
  .skill-icon {
    width: 50px;
    height: 50px;
  }
  
  .skill-logo {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 480px) {
  .skills-grid {
    grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  }
  
  .skill-card {
    padding: 1rem 0.5rem;
  }
  
  .skill-icon {
    width: 45px;
    height: 45px;
  }
  
  .skill-logo {
    width: 24px;
    height: 24px;
  }
  
  .skill-name {
    font-size: 0.85rem;
  }
}
</style>
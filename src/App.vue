<script setup>
import Header from './components/Header.vue'
import Section from './components/Section.vue'
import maPhoto from '@/assets/maPhoto.png'
import Footer from './components/Footer.vue';
</script>

<template>
  <Header firstname="Olivier" lastname="Hollebeke" title="Étudiant en informatique" email="hollebekeolivier@gmail.com" />

  <main class="container">
    <Section id="about" title="À propos">
      <div class="aboutWrap">
        <img :src="maPhoto" alt="Photo de Olivier Hollebeke" class="avatar" />

        <div class="aboutText">
          <p>
            Je m’appelle Olivier Hollebeke, étudiant en dernière année de bachelier en informatique à
            <a class="linkSchool" href="https://www.eafcm.be/" target="_blank" rel="noopener">
              l’EAFC de Mouscron
            </a>.
            J’ai choisi cette formation par intérêt pour le fonctionnement global des systèmes informatiques
            et la manière dont les différentes technologies interagissent entre elles.
          </p>

          <p>
            Je m’intéresse particulièrement aux réseaux, aux systèmes et à la sécurité, avec une vraie
            curiosité pour comprendre comment les échanges de données, les infrastructures et les services
            fonctionnent en profondeur. Le développement vient compléter cette approche, afin de mieux
            relier ce qui se passe côté application à ce qui se passe côté réseau et système.
          </p>

          <p>
            En dehors de l’informatique, je suis passionné de guitare, de mangas, de culture japonaise,
            de jeux vidéo et d’automobile. Ces centres d’intérêt participent à ma curiosité et à mon envie
            constante d’apprendre.
          </p>
        </div>
      </div>
    </Section>

    <Section id="education" title="Formations">
      <div class="grid">
        <article class="box">
          <h3>Bachelier en informatique</h3>
          <p class="small">EAFC de Mouscron — 2023 · aujourd’hui</p>

          <p>
            Formation orientée développement d’applications, avec un intérêt marqué pour
            la compréhension du fonctionnement des réseaux, des systèmes et de la sécurité.
          </p>

          <p class="tag">Compétence validée : Technicien PC & réseaux</p>
        </article>

        <article class="box">
          <h3>Conseiller commercial en automobile</h3>
          <p class="small">IFAPME — 2020 · 2022</p>

          <p>
            Formation axée sur la relation client, la communication et la compréhension
            technique du produit, apportant une base solide pour le travail en équipe
            et la vulgarisation technique.
          </p>
        </article>
      </div>
    </Section>

    <Section id="skills" title="Compétences">
      <div class="skillsWrap">
        <div class="skillsGrid">
          <span class="skill">HTML / CSS</span>
          <span class="skill">JavaScript</span>
          <span class="skill">Vue.js</span>
          <span class="skill">Réseaux (TCP/IP)</span>
          <span class="skill">Systèmes Linux</span>
          <span class="skill">Git / GitHub</span>
          <span class="skill">Virtualisation</span>
        </div>
      </div>
    </Section>

    <Section id="info" title="Infos">
      <div class="infoGrid">
        <div class="infoBox">
          <h3>Langues</h3>
          <div class="infoChips">
            <span class="chip">Français : langue maternelle</span>
            <span class="chip">Anglais : niveau intermédiaire</span>
            <span class="chip">Néerlandais : bonnes bases</span>
            <span class="chip">Japonais : notions de base (日本語：基礎)</span>
          </div>
        </div>


        <div class="infoBox">
          <h3>Mobilité</h3>
          <div class="infoChips">
            <span class="chip">Permis B</span>
            <span class="chip">Véhicule personnel</span>
          </div>
        </div>

        <div class="infoBox">
          <h3>Disponibilité</h3>
          <p class="infoText">Ouvert à un stage / opportunité junior (selon période).</p>
        </div>
        <div class="infoBox">
          <h3>Curriculum Vitae</h3>

          <a href="/cv/cvOlivierHollebeke.pdf" class="cvLink" download target="_blank" rel="noopener">
            <svg class="icon pdf" viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor"
                d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 13h1.5v5H8v-5zm3 0h2.2c1.3 0 2.3 1 2.3 2.5S14.5 18 13.2 18H11v-5zm1.5 1.4v2.2h.7c.7 0 1.2-.4 1.2-1.1s-.5-1.1-1.2-1.1h-.7zm4-1.4H20v1.4h-2v1h1.7v1.4H18v2.2h-1.5v-5z" />
            </svg>

            Télécharger mon CV (PDF)
          </a>
        </div>
      </div>
    </Section>

    <Section id="projects" title="Projets">
      <div class="projectsGrid">

        <article class="project">
          <h3>BookFlow</h3>
          <p class="small">Projet web personnel</p>

          <p>
            BookFlow est une application web de gestion de bibliothèque personnelle.
            Elle permet de rechercher des livres, de constituer une collection en ligne
            et de gérer facilement sa bibliothèque.
          </p>

          <ul class="projectList">
            <li>Recherche de livres via l’API <a href="https://openlibrary.org/" target="_blank" rel="noopener">Open
                Library</a></li>
            <li>Ajout de livres à une bibliothèque personnelle</li>
            <li>Ajout manuel de livres</li>
            <li>Modification et suppression des livres</li>
            <li>Export de la bibliothèque au format PDF</li>
          </ul>

          <div class="projectLinks">
            <a class="projectLink" href="https://github.com/LennonOliver/BookFlow" target="_blank" rel="noopener">
              Voir le projet sur GitHub
            </a>

            <a class="projectLink" href="https://projet-web-olivier-hollebeke.vercel.app/" target="_blank"
              rel="noopener">
              Essayer l'application
            </a>
          </div>

        </article>

      </div>
    </Section>


    <Section id="contact" title="Contact">
      <div class="contactGrid">

        <div class="contactBox">
          <h3>Coordonnées</h3>
          <p>
            Vous pouvez me contacter pour toute question, opportunité
            ou collaboration.
          </p>

          <ul class="contactList">
            <li>
              📧
              <a href="mailto:hollebekeolivier@gmail.com">
                hollebekeolivier@gmail.com
              </a>
            </li>

            <li>
              📞
              <a href="tel:+32472263133">
                +32 472 26 31 33
              </a>
            </li>
          </ul>
        </div>

        <div class="contactBox">
          <h3>En ligne</h3>
          <ul class="contactList">
            <li>
              <svg class="icon github" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12 0.5C5.37 0.5 0 5.87 0 12.5c0 5.28 3.438 9.748 8.205 11.325.6.112.82-.262.82-.582
      0-.287-.01-1.045-.015-2.052-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756
      -1.089-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237
      1.07 1.834 2.809 1.304 3.495.997
      .108-.776.418-1.305.762-1.605
      -2.665-.304-5.466-1.332-5.466-5.93
      0-1.31.469-2.381 1.235-3.221
      -.124-.303-.535-1.523.117-3.176
      0 0 1.008-.322 3.301 1.23
      .957-.266 1.983-.399 3.003-.404
      1.02.005 2.047.138 3.006.404
      2.291-1.552 3.297-1.23 3.297-1.23
      .653 1.653.242 2.873.118 3.176
      .77.84 1.233 1.911 1.233 3.221
      0 4.61-2.805 5.624-5.475 5.921
      .43.371.823 1.102.823 2.222
      0 1.604-.014 2.896-.014 3.293
      0 .322.216.699.825.58
      C20.565 22.245 24 17.78 24 12.5
      24 5.87 18.63 0.5 12 0.5z" />
              </svg>

              <a href="https://github.com/LennonOliver" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>

          </ul>
        </div>

      </div>
    </Section>
  </main>
  <Footer></Footer>
</template>

<style></style>

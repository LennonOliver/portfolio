<script setup>
defineProps({
    firstname: String,
    lastname: String,
    title: String,
    email: String,
})

const links = [
    { id: 'about', label: 'À propos' },
    { id: 'education', label: 'Formations' },
    { id: 'skills', label: 'Compétences' },
    { id: 'info', label: 'Infos' },
    { id: 'projects', label: 'Projets' },
    { id: 'contact', label: 'Contact' },
]
</script>

<template>
    <header class="siteHeader">
        <div class="container">
            <div class="d-flex flex-wrap align-items-center justify-content-between py-3 gap-2">
                <a href="#top" class="brand nav-link text-decoration-none">
  <span class="brandName">{{ firstname }} {{ lastname }}</span>
  <span class="brandTitle d-none d-md-inline">· {{ title }}</span>
</a>


                <nav class="navWrap" aria-label="Navigation principale">
                    <ul class="nav nav-pills">
                        <li v-for="link in links" :key="link.id" class="nav-item">
                            <a class="nav-link" :href="`#${link.id}`">{{ link.label }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<style scoped>
.siteHeader {
    position: sticky;
    top: 0;
    z-index: 100;
    backdrop-filter: blur(8px);
}

.brandName {
    font-weight: 700;
    font-size: 1.15rem;
}

.brandTitle {
    margin-left: 8px;
    opacity: 0.6;
    font-size: 0.95rem;
}

.navWrap .nav-link {
    border-radius: 999px;
    padding: 0.45rem 0.75rem;
    color: inherit;
    opacity: 0.75;
    transition: opacity 0.15s ease, transform 0.15s ease;
}

.navWrap .nav-link:hover {
    opacity: 1;
    transform: translateY(-1px);
}

.navWrap .nav-link.active {
    opacity: 1;
    font-weight: 500;
}

.brand {
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  opacity: 0.75;
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.brand:hover {
  opacity: 1;
  transform: translateY(-1px);
}

</style>
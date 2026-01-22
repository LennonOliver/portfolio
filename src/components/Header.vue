<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";

defineProps({
  firstname: String,
  lastname: String,
  title: String,
  email: String,
});

const links = [
  { id: "about", label: "À propos" },
  { id: "education", label: "Formations" },
  { id: "skills", label: "Compétences" },
  { id: "info", label: "Infos" },
  { id: "projects", label: "Projets" },
  { id: "contact", label: "Contact" },
];

const isOpen = ref(false);
const headerEl = ref(null);

let ro = null;

const setHeaderHeight = () => {
  if (!headerEl.value) return;
  const h = headerEl.value.getBoundingClientRect().height;
  document.documentElement.style.setProperty("--header-height", `${Math.ceil(h)}px`);
};

const toggleMenu = async () => {
  isOpen.value = !isOpen.value;
  await nextTick();
  setHeaderHeight();
};

const closeMenu = async () => {
  isOpen.value = false;
  await nextTick();
  setHeaderHeight();
};

const onResize = () => setHeaderHeight();

onMounted(async () => {
  await nextTick();
  setHeaderHeight();

  ro = new ResizeObserver(() => setHeaderHeight());
  if (headerEl.value) ro.observe(headerEl.value);

  window.addEventListener("resize", onResize);
});

onBeforeUnmount(() => {
  if (ro) ro.disconnect();
  window.removeEventListener("resize", onResize);
});
</script>

<template>
  <header ref="headerEl" class="siteHeader">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-between py-3 gap-2">
        <a href="#top" class="brand nav-link text-decoration-none" @click="closeMenu">
          <span class="brandName">{{ firstname }} {{ lastname }}</span>
          <span class="brandTitle d-none d-md-inline">· {{ title }}</span>
        </a>

        <div
          class="burger d-md-none"
          :class="{ open: isOpen }"
          role="button"
          aria-label="Menu"
          :aria-expanded="isOpen"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav class="navWrap d-none d-md-block" aria-label="Navigation principale">
          <ul class="nav nav-pills">
            <li v-for="link in links" :key="link.id" class="nav-item">
              <a class="nav-link" :href="`#${link.id}`">{{ link.label }}</a>
            </li>
          </ul>
        </nav>

        <Transition name="mobileNav">
          <nav v-if="isOpen" id="mobileNav" class="mobileNav d-md-none" aria-label="Navigation mobile">
            <ul class="nav nav-pills flex-column">
              <li v-for="link in links" :key="link.id" class="nav-item">
                <a class="nav-link" :href="`#${link.id}`" @click="closeMenu">
                  {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>
        </Transition>
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

.brandName {
  font-weight: 700;
  font-size: 1.15rem;
}

.brandTitle {
  margin-left: 8px;
  opacity: 0.6;
  font-size: 0.95rem;
}

.navWrap .nav-link,
.mobileNav .nav-link {
  padding: 0.45rem 0.75rem;
  border-radius: 999px;
  color: inherit;
  opacity: 0.75;
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.navWrap .nav-link:hover,
.mobileNav .nav-link:hover {
  opacity: 1;
  transform: translateY(-1px);
}

.navWrap .nav-link.active,
.mobileNav .nav-link.active {
  opacity: 1;
  font-weight: 500;
}

.burger {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  opacity: 0.75;
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.burger:hover {
  opacity: 1;
  transform: translateY(-1px);
}

.burger span {
  width: 20px;
  height: 2px;
  background: currentColor;
  border-radius: 2px;
  transition: transform 0.18s ease, opacity 0.18s ease;
}

.burger.open span:nth-child(1) {
  transform: translateY(1px);
}

.burger.open span:nth-child(2) {
  opacity: 0.6;
}

.burger.open span:nth-child(3) {
  transform: translateY(-1px);
}

.mobileNav {
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.25rem;
}

.mobileNav .nav {
  align-items: center;
}

.mobileNav .nav-item {
  width: 100%;
  display: flex;
  justify-content: center;
}

.mobileNav .nav-link {
  text-align: center;
}

.mobileNav-enter-active,
.mobileNav-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.mobileNav-enter-from,
.mobileNav-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

.mobileNav-enter-to,
.mobileNav-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>

<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '@/stores/auth';

  useHead({
    title: 'Home Page | Exclusive Content',
    meta: [
      {
        name: 'description',
        content: 'home page description goes here',
      },
      {
        name: 'keyword',
        content: 'home, meta, keywords, goes here',
      },
    ],
  });

  const { authenticated } = storeToRefs(useAuthStore());
  const http = useNuxtApp().$http;

  const pageTitle = ref<string>('');
  const projects = ref([]);
  const isLoading = ref<boolean>(true);
  const isError = ref<boolean>(false);

  const sliderBreakpoints = {
    320: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  };

  const getHomeContent = async () => {
    isLoading.value = true;

    try {
      const res = await http.get('/home');
      const exclusiveContent = res?.data?.blocks.find(
        (block: Record<string, unknown>) =>
          block.block_type === 'vertical_slider',
      );

      if (exclusiveContent) {
        pageTitle.value = exclusiveContent?.title || '';
        projects.value = exclusiveContent?.projects || [];
      }
    } catch (error) {
      console.error(error);
      isError.value = true;
    } finally {
      isLoading.value = false;
    }
  };

  onBeforeMount(() => {
    getHomeContent();
  });

  const updateFavoriteStatus = async (id: number, added: boolean) => {
    try {
      await http.get(
        `/member/favorites/${added ? 'remove' : 'add'}?program=${id}`,
      );
      getHomeContent();
    } catch (error) {
      console.error(error);
    }
  };
</script>

<template>
  <div class="container mx-auto">
    <div v-if="isLoading" class="py-6">
      <div class="mb-14">
        <div class="max-w-sm animate-pulse">
          <div
            class="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
          ></div>
          <div
            class="h-[1px] bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"
          ></div>
        </div>
      </div>
      <div class="flex gap-4 flex-wrap justify-center w-full">
        <div
          v-for="loaderCard in 5"
          :key="loaderCard"
          class="flex items-center justify-center h-[450px] w-[240px] bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
        >
          <svg
            class="w-10 h-10 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 20"
          >
            <path
              d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"
            />
            <path
              d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div v-else>
      <h1 v-if="isError" class="p-4 text-secondary">Something went wrong!</h1>
      <div v-else>
        <h1 class="py-4 text-2xl">{{ pageTitle }}</h1>
        <div class="h-[1px] max-w-xs mb-4 bg-gray-600"></div>
        <div class="pb-10">
          <!-- lazy -->
          <Swiper
            :modules="[SwiperAutoplay, SwiperEffectCreative]"
            :slides-per-view="1"
            loop
            parallax
            :space-between="10"
            :breakpoints="sliderBreakpoints"
            :autoplay="{
              delay: 4000,
              disableOnInteraction: true,
            }"
          >
            <SwiperSlide
              v-for="project in projects"
              :key="project.id"
              class="py-10"
            >
              <div
                class="relative w-full rounded-lg overflow-hidden transition-all duration-500 hover:scale-105"
              >
                <button
                  v-if="authenticated"
                  :class="[project.favorite ? 'text-secondary' : 'text-white']"
                  class="absolute top-2 left-2 z-50 inline-block hover:text-secondary"
                  @click="updateFavoriteStatus(project.id, project.favorite)"
                >
                  <Icon name="mdi:heart" size="2rem" />
                </button>
                <a href="#" class="block h-[500px] w-full">
                  <span
                    class="absolute top-0 right-0 z-50 inline-block py-2 px-3 bg-black text-white text-xs"
                    >{{ project.type }}
                  </span>
                  <img
                    class="swiper-lazy absolute inset z-10 w-full h-full object-cover"
                    :src="project.image"
                    :alt="project.title"
                    loading="lazy"
                  />
                  <div
                    class="swiper-lazy-preloader swiper-lazy-preloader-white"
                  ></div>
                  <div
                    class="absolute inset z-20 w-full h-full bg-gradient-to-t from-gray-900 to-gray-600 bg-gradient-to-r opacity-30"
                  ></div>
                  <h2
                    class="absolute bottom-0 left-0 z-50 py-2 px-3 bg-secondary text-white"
                  >
                    {{ project.title }}
                  </h2>
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

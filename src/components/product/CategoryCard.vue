<script setup lang="ts">
defineProps<{
  slug: string;
  name: string;
}>();

// Automatically finds every image inside src/assets/categories/,
// no matter how many you add or remove later. { eager: true } means
// "load them all immediately" instead of returning lazy-loading
// functions, since these are small thumbnail images we always need.
const imageModules = import.meta.glob('../../assets/categories/*.{jpg,jpeg,png}', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

// The keys glob gives us look like:
//   '../../assets/categories/beauty.jpg'
// We only want the filename without extension ('beauty') to use as
// our lookup key, so this builds a clean slug -> image-url map.
const categoryImages: Record<string, string> = {};
for (const path in imageModules) {
  const filename = path.split('/').pop() ?? '';        // 'beauty.jpg'
  const slugKey = filename.replace(/\.(jpg|jpeg|png)$/, ''); // 'beauty'
  categoryImages[slugKey] = imageModules[path];
}

// Falls back to a keyword-matched online photo for any category
// you haven't added a local image for yet.
function getCategoryImage(slug: string): string {
  return categoryImages[slug] ?? `https://loremflickr.com/300/300/${slug.replace(/-/g, ',')}`;
}
</script>

<template>
  <RouterLink
    :to="`/category/${slug}`"
    class="flex flex-col items-center gap-2 group"
  >
    <div class="w-full aspect-square rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800">
      <img
        :src="getCategoryImage(slug)"
        :alt="name"
        class="w-full h-full object-cover group-hover:scale-105 transition duration-300"
      />
    </div>
    <span class="text-sm font-medium text-primary capitalize">{{ name }}</span>
  </RouterLink>
</template>
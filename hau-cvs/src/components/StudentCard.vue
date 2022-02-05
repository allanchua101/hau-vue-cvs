<template>
  <v-col cols="12" md="6">
    <v-card elevation="0" outlined>
      <v-img
        class="white--text align-end"
        :src="backgroundUrl"
        gradient="to top right, rgba(00,00,00,.33), rgba(00,00,00,.7)"
        max-height="242px"
      ></v-img>
      <!-- Card header -->
      <v-card-title class="hau hau-name pb-0">
        {{ studentName }}
      </v-card-title>
      <!-- Card content -->
      <v-card-text>
        <!-- Email -->
        <v-spacer class="mt-2"></v-spacer>
        <a :href="`mailto:${email}`" class="hau hau-contact">
          <strong>Email:</strong> {{ email }}
        </a>
        <!-- Phone -->
        <v-spacer class="mt-2"></v-spacer>
        <a :href="`tell:${phone}`" class="hau hau-contact">
          <strong>Phone:</strong> {{ phone }}
        </a>
        <v-spacer class="mt-8"></v-spacer>
        <!-- Chips -->
        <v-chip
          class="mr-1"
          v-for="skill in skills"
          :key="skill.name"
          outlined
          label
        >
          <v-icon class="mr-1">{{ skill.icon }}</v-icon>
          {{ skill.name }}
        </v-chip>
      </v-card-text>
      <!-- Card button -->
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="black" elevation="0" text @click="() => onViewResume(id)">
          <v-icon class="mr-1">mdi-arrow-right</v-icon>
          View CV
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    studentName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      required: true,
    },
    backgroundUrl: {
      type: String,
      required: true,
    },
  },
  methods: {
    onViewResume(id) {
      this.$router.push({
        path: `/resume/?id=${id}`,
      });
    },
  },
};
</script>

<style>
.hau.hau-name {
  font-weight: bold;
  font-size: 24px;
}

.hau.hau-contact {
  font-size: 16px;
  color: #202024;
}
.hau.hau-contact-icon {
  color: #202024 !important;
}
</style>

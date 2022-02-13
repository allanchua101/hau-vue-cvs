<template>
  <v-card color="grey darken-3" dark>
    <v-card-text>
      <avatar />
      <div class="text-sm-center mb-4 mt-3">
        <h1>
          {{ studentData.firstName }}
          <span class="light-blue--text text--lighten-3">
            {{ studentData.lastName }}
          </span>
        </h1>
      </div>

      <sidebar-section :options="infoSection" />
      <sidebar-section :options="socialsSection" />
      <sidebar-section :options="hobbiesSection">
        <template v-slot:item="{ item }">
          <v-chip class="mr-1 mb-1">
            <v-avatar class="mr-1">
              <v-icon>
                {{ item.icon }}
              </v-icon>
            </v-avatar>
            {{ item.text }}
          </v-chip>
        </template>
      </sidebar-section>
      <sidebar-section :options="languages">
        <template v-slot:items="{ items }">
          <v-container pa-0>
            <v-layout wrap class="text-xs-center">
              <template v-for="(item, i) in items">
                <v-chip :key="i" class="mr-1 mb-1">
                  {{ item.text }}
                </v-chip>
              </template>
            </v-layout>
          </v-container>
        </template>
      </sidebar-section>
    </v-card-text>
  </v-card>
</template>

<script>
import Avatar from "../sidebar/Avatar";
import SidebarSection from "../sidebar/Section";
export default {
  name: "Sidebar",
  props: {
    studentData: {
      type: Object,
      required: true,
    },
  },
  components: { SidebarSection, Avatar },
  data() {
    return {};
  },
  computed: {
    infoSection() {
      let output = {
        title: "INFO",
        items: [],
      };

      output.items.push({
        name: "Email",
        icon: "mdi-email",
        text: this.studentData.email,
      });

      output.items.push({
        name: "Birth Date",
        icon: "mdi-cake-variant",
        text: this.studentData.birthDay,
      });

      output.items.push({
        name: "Address",
        icon: "mdi-map-marker",
        text: this.studentData.address,
      });

      return output;
    },
    socialsSection() {
      let output = {
        title: "SOCIALS",
        items: [],
      };

      output.items.push({
        name: "Github",
        icon: "mdi-github",
        text: this.studentData.githubText,
        link: this.studentData.github,
      });

      output.items.push({
        name: "LinkedIn",
        icon: "mdi-linkedin",
        text: this.studentData.linkedinText,
        link: this.studentData.linkedin,
      });

      output.items.push({
        name: "Twitter",
        icon: "mdi-twitter",
        text: this.studentData.twitterText,
        link: this.studentData.twitter,
      });

      return output;
    },
    hobbiesSection() {
      let output = {
        title: "HOBBIES",
        items: [],
      };

      if (
        this.studentData &&
        this.studentData.hobbies &&
        this.studentData.hobbies.length > 0
      ) {
        output.items.push(...this.studentData.hobbies);
      }

      return output;
    },
    languages() {
      let output = {
        title: "LANGUAGES",
        items: [],
      };

      if (
        this.studentData &&
        this.studentData.languages &&
        this.studentData.languages.length > 0
      ) {
        output.items.push(...this.studentData.languages);
      }

      return output;
    },
  },
};
</script>

<style scoped>
.sidebar {
  background: #2e2e2e;
}
</style>

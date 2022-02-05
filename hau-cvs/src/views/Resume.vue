<template>
  <v-container class="hau hau-resume-page">
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="hau hau-title">{{ studentName }}</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getResumeByID } from "../data/resumes-proxy";

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default {
  data: () => {
    return {
      id: 0,
      studentName: "",
    };
  },
  mounted() {
    this.id = parseInt(getParameterByName("id"));

    const student = getResumeByID(this.id);

    this.studentName = student.name;
    // TODO: Gab add properties
  },
};
</script>

<style>
.hau.hau-resume-page {
  max-width: 720px;
  margin: auto;
}
</style>

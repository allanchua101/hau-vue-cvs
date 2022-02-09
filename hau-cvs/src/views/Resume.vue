<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex md10 sm12>
        <v-layout v-if="studentData" wrap>
          <v-flex md4>
            <sidebar-container
              :student-data="studentData"
              class="fill-height"
            />
          </v-flex>
          <v-flex md8>
            <content-container
              :student-data="studentData"
              class="fill-height"
            />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { getResumeByID } from "../data/resumes-proxy";
import SidebarContainer from "../components/cv/sidebar/Container";
import ContentContainer from "../components/cv/content/Container";

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default {
  components: {
    SidebarContainer,
    ContentContainer,
  },
  data: () => {
    return {
      id: 0,
      studentName: "",
      studentData: null,
    };
  },
  mounted() {
    this.id = parseInt(getParameterByName("id"));

    const student = getResumeByID(this.id);

    this.studentData = student;
  },
};
</script>

<style>
.hau.hau-resume-page {
  max-width: 720px;
  margin: auto;
}
</style>

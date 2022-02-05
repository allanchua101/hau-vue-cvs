<template>
  <v-container class="hau hau-stud-list">
    <v-row>
      <v-col cols="12" class="text-center">
        <ResumeIcon class="hau hau-icon" />
        <h1 class="hau hau-title">Resume List</h1>
      </v-col>
    </v-row>
    <v-row>
      <StudentCard
        v-for="student in studentList"
        :key="student.id"
        :id="student.id"
        :studentName="student.name"
        :email="student.email"
        :phone="student.phone"
        :skills="student.skills"
        :backgroundUrl="student.backgroundUrl"
      />
    </v-row>
  </v-container>
</template>

<script>
import StudentCard from "../components/StudentCard.vue";
import ResumeIcon from "../icons/ResumeIcon.vue";
import { getResumes } from "../data/resumes-proxy";

export default {
  name: "Home",
  components: {
    StudentCard,
    ResumeIcon,
  },
  data: () => {
    return {
      studentList: getResumes(),
    };
  },
};
</script>

<style>
.hau.hau-stud-list {
  max-width: 920px;
  margin: auto;
  margin-top: 24px;
}

.hau.hau-title {
  color: white;
  float: left;
  margin-left: 24px;
  font-size: 48px;
}

.hau.hau-icon {
  max-width: 64px;
  float: left;
}

.hau.hau-icon path,
.hau.hau-icon rect {
  fill: white;
}
</style>

<template>
  <v-card color="grey lighten-4" light>
    <v-card-text>
      <content-section title="Objectives">
        {{ studentData.objectives }}
      </content-section>
      <content-section v-if="studentData.educations" title="Education">
        <v-layout v-for="(education, i) in studentData.educations" :key="i">
          <v-flex md4> {{ education.from }} - {{ education.to }} </v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">
              {{ education.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>
      <content-section
        v-if="studentData.skills"
        id="to-timeline"
        title="Skills"
      >
        <template slot="actions"> </template>
        <v-layout wrap>
          <template v-for="(skill, i) in studentData.skills">
            <v-flex v-if="skill.divider" :key="`${i}-div`" md12 xs12 mb-4 />
            <v-flex v-else :key="`${i}-content`" md6 xs12>
              <div class="mr-2 ml-2">
                <div class="align-center">
                  <v-icon small>
                    {{ skill.icon }}
                  </v-icon>
                  {{ skill.name }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>
      <content-section v-if="studentData.experiences" title="My Experiences">
        <v-layout v-for="(experiences, i) in studentData.experiences" :key="i">
          <v-flex md4> {{ experiences.from }} - {{ experiences.to }} </v-flex>
          <v-flex md8>
            <strong v-if="experiences.title">{{ experiences.title }}</strong>
            <div v-if="experiences.location">
              <i>{{ experiences.location }}</i>
            </div>
            <div v-if="experiences.description">
              {{ experiences.description }}
            </div>
          </v-flex>
        </v-layout>
      </content-section>

      <content-section>
        <i>
          I hereby certify that the above Information is true and correct to the
          best of my knowledge and belief".
        </i>
      </content-section>

      <content-section>
        <center>
          <b
            ><u>{{ `${studentData.lastName}, ${studentData.firstName}` }}</u>
          </b>
        </center>
        <center><i>Applicant</i></center>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from "../content/Section";

export default {
  name: "MainContent",
  components: { ContentSection },
  props: {
    studentData: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
</style>

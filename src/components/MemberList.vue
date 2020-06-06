<template>
  <v-simple-table class="fill-height" fluid style="background-color:#CFD8DC;">
    <template v-slot:default align="center" justify="center">
      <thead>
        <tr>
          <th class="text-left">순번</th>
          <th class="text-left">계정명</th>
          <th class="text-left">연락처</th>
          <th class="text-left">이메일</th>
          <th class="text-left">상태</th>
          <th class="text-left">등록일</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in memberList" :key="item.name">
          <td>{{ item.id }}</td>
          <td>{{ item.account }}</td>
          <td>{{ item.phone_number }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.registered_at }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'MemberList',
  props: {
    // list: {
    //   type: Array,
    //   default: []
    // }
  },
  computed: {
    ...mapState(['memberList'])
  },
}
</script>
<style lang="scss" scoped>
  // .v-data-table table {
  //   width: 90%;
  //   margin: 0 auto;
  // }
</style>
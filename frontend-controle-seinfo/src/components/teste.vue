<template>
<select name="LeaveType" @change="onChange($event)" class="form-control" v-model="key">
   <option value="1">Annual Leave/ Off-Day</option>
   <option value="2">On Demand Leave</option>
</select>   
</template>

<script>
export default {
  methods: {
    onChange:function(event){
       console.log(event.target.value);
    }
  },
  data() {
    return {
      data,
      columns,
      selected: "",
    }
  }
}
</script>
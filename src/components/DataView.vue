<template>
    <div>
                <EzCharts></EzCharts>
                <ShowInfo></ShowInfo>
    </div>
</template>

<script>
import EzCharts from "./EzCharts.vue";
import ShowInfo from "./ShowInfo.vue";

export default {
    name: 'DataView',
    components: {
        EzCharts,
        ShowInfo,
    },
    methods:{
        clickMenu(item) {
            this.$router.push({ name: item.name });
        },
    }
}
</script>

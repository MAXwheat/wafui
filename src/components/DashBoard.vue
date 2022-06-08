<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <left-menu></left-menu>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import LeftMenu from "./LeftMenu.vue";

export default {
    name: 'DashBoard',
    components: {
        LeftMenu
    },
    methods:{
        clickMenu(item) {
            this.$router.push({ name: item.name });
        },
    }
}
</script>

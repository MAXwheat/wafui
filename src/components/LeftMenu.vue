<template>
    <el-menu class="categories" default-active="/dataview" active-text-color="red" router>
        <el-menu-item index="/dataview">
            <i class="el-icon-menu"></i>
            <span slot="title">数 据 概 览</span>
        </el-menu-item>
        <el-menu-item index="/ip">
            <i class="el-icon-menu"></i>
            <span slot="title">区 域 管 理</span>
        </el-menu-item>
        <el-menu-item index="/changepassword">
            <i class="el-icon-menu"></i>
            <span slot="title">修 改 密 码</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default {
    name: 'LeftMenu',
}
</script>


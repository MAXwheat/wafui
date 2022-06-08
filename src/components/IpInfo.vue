<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="策略名称">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="C段范围">
                <el-input v-model="form.region"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
        </el-form>

        <vue-good-table max-height="800px" :columns="columns" :rows="rows" :line-numbers="true" />
    </div>
</template>

<script>
export default {
    name: 'IpInfo',
    data() {
        return {
            columns: [
                {
                    label: 'Name',
                    field: 'name',
                },
                {
                    label: 'Age',
                    field: 'age',
                    type: 'number',
                },
                {
                    label: 'Created On',
                    field: 'createdAt',
                    type: 'date',
                    dateInputFormat: 'yyyy-MM-dd',
                    dateOutputFormat: 'MMM do yy',
                },
                {
                    label: 'Percent',
                    field: 'score',
                    type: 'percentage',
                },
            ],
            rows: [
                { id: 1, name: "Finnegan", age: 20, createdAt: '2010-10-05', score: 0.31343 },
                { id: 2, name: "Mink", age: 24, createdAt: '2011-05-31', score: 0.88343 },
                { id: 3, name: "Dick", age: 16, createdAt: '2011-08-30', score: 0.11343 },
                { id: 4, name: "Jack", age: 55, createdAt: '2016-10-11', score: 0.66343 },
                { id: 5, name: "Van", age: 40, createdAt: '2016-05-21', score: 0.43343 },
                { id: 6, name: "Dixie", age: 20, createdAt: '2018-01-31', score: 0.04343 },
                { id: 7, name: "Schizo", age: 8, createdAt: '2019-07-05', score: 0.75343 },
                { id: 8, name: "Mala", age: 18, createdAt: '2012-11-29', score: 0.39343 },
                { id: 9, name: "Skeeter", age: 35, createdAt: '2004-12-27', score: 0.84343 },
                { id: 10, name: "Luka", age: 27, createdAt: '2014-05-16', score: 0.27643 },
            ],
            form: {
                name: '',
                region: '',
            }
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>

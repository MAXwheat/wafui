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

        <vue-good-table max-height="800px" :columns="columns" :rows="rows" :line-numbers="true"
            @on-row-click="onRowClick">
            <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field === 'details'">
                    <button class="ant-btn ant-btn-red" @click="doSomething(props.row)">删 除 策 略</button>
                </span>
                <span v-else>
                    {{ props.formattedRow[props.column.field] }}
                </span>
            </template>
        </vue-good-table>
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
                {
                    label: "Details",
                    field: "details",
                    filterable: true
                }
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
        },
        onRowClick(params) {
        },
        doSomething(params) {
            alert(params['id']);
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

.ant-btn {
    line-height: 1.499;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    background-image: none;
    border: 1px solid transparent;
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    cursor: pointer;
    -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    height: 22px;
    padding: 0 8px;
    font-size: 10px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
    border-color: #d9d9d9;
}

.ant-btn-primary {
    color: #fff;
    background-color: #1890ff;
    border-color: #1890ff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}

.ant-btn-red {
    color: #fff;
    background-color: #FF5A44;
    border-color: #FF5A44;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
}
</style>

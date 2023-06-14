<template>
    <section class="row" v-if="$cookies.get('permissions').includes('Read')">
        <div class="col-12 table-responsive">
            <a href="#" @click.prevent="openCreate()" v-if="$cookies.get('permissions').includes('Write')" class="btn btn-info shadow mr-1 mb-1">Create a Policy</a>
            <table class="table table-hover table-striped mb-0" style="width: 100%" ref="table">
                <thead class="thead-dark">
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Policy Title
                        </th>
                        <th>
                            Status
                        </th>
                        <th>
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(i, x) in policies.data" :key="x">
                        <td>
                            {{ x += 1}}
                        </td>
                        <td>
                            {{ i.policy_title }}
                        </td>
                        <td>
                            <div class="badge badge-success mr-1 mb-1" v-if="i.policy_status === 1">
                                Active
                            </div>
                            <div class="badge badge-danger mr-1 mb-1" v-else>
                                Disabled
                            </div>
                        </td>
                        <td>
                            <div class="btn-group mr-1 mb-1">
                                <div class="dropdown">
                                    <button type="button" class="btn btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Options
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        <a class="dropdown-item active" v-if="$cookies.get('permissions').includes('Edit')" @click.prevent="openEdit(i.policy_id)" href="">Edit</a>
                                        <a class="dropdown-item" v-if="$cookies.get('permissions').includes('Edit')" @click.prevent="changeStatus(i.policy_id, i.policy_status)" href="">Change Status</a>
                                        <a class="dropdown-item" v-if="$cookies.get('permissions').includes('Delete')" @click.prevent="remove(i.policy_id)" href="">Remove</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <pagination :data="policies" @pagination-change-page="loadApi"></pagination>

        </div>
    </section>
</template>

<style>
.vs-input {
    width: 100%;
}
.vs__search{
    height: 30px !important;
}
.vs__selected{
    font-size: 13px !important;
    background-color: #ecf0f1;
    border: 1px solid #222;
    border-radius: 2px;
    color: #222;
    line-height: 2px;
    padding: 5px;
    border-radius: 5px;
}
</style>

<script>

export default {
    data () {
        return {
            policies: {},
            errors: [],
            title: '',
            editId: ''
        }
    },
    methods: {
        async loadApi (page = 1) {
            const loading = this.$vs.loading({
                target: this.$refs.table,
                color: 'dark'
            })
            try {
                const { data } = await axios.get(`${this.$base}policy-js?page=${page}`)
                
                this.policies = data
                loading.close()
            } catch (err) {
                alert(err)
                loading.close()
            }
        },
         openCreate() {
            window.location.href = 'policies-mgt/create'
        },
         openEdit (id) {
            window.location.href = `policies-mgt/${id}/edit`
        },
        async changeStatus (id, status) {
            if ( confirm('Do you want to change status of this role?')) {
                const loading = this.$vs.loading({
                    target: this.$refs.table,
                    color: 'dark',
                    text: 'Processing...'
                })
                try {
                    const { data } = await axios.get(`${this.$base}policy_status/${id}/${status}`)
                    loading.close()
                    this.$vs.notification({
                        color: 'dark',
                        title: 'Done',
                        text: data.msg
                    })
                    this.loadApi()
                } catch (err) {
                    alert(err)
                    loading.close()
                }
            }
        },
        async remove(id) {
            if ( confirm('This operation is irreversible. Do you want to delete this role?')) {
                const loading = this.$vs.loading({
                    target: this.$refs.table,
                    color: 'dark',
                    text: 'Processing...'
                })
                try {
                    const { data } = await axios.delete(`${this.$base}policies-mgt/${id}`)
                    loading.close()
                    this.$vs.notification({
                        color: 'dark',
                        title: 'Done',
                        text: data.msg
                    })
                    this.loadApi()
                } catch (err) {
                    alert(err)
                    loading.close()
                }
            }
        }
    },
    created () {
        this.loadApi()
    }
}
</script>
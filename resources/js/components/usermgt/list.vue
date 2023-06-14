<template>
    <section class="row" v-if="$cookies.get('permissions').includes('Read')">
        <section class="col-md-6">
            <div class="badge badge-primary mr-1 mb-1">Total Members: <b>{{ count }}</b></div>
        </section>
        <section class="col-md-6">
            <vs-input
                v-model="search"
                @keyup="loadApi()"
                dark placeholder="Search a Member" style="float: right" />
        </section>
        <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>
                                S#
                            </th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Position</th>
                            <th>Status</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(i, x) in users.data" :key="x">
                            <td>
                                {{ x += 1 }}
                            </td>
                            <td>
                                <img v-img v-if="i.adprofile_avatar" :src="i.adprofile_avatar" class="users-avatar-shadow rounded-circle" height="48" />
                                <img v-else :src="'imgs/default.png'" class="users-avatar-shadow rounded-circle" height="48" />
                            </td>
                            <td>
                                {{ i.adfirst_name + ' ' + i.adlast_name }}
                            </td>
                            <td>
                                {{ i.aduser_name }}
                            </td>
                            <td>
                                <small class="badge badge-info" v-for="(a,b) in i.roles" :key="b">{{ a.adrole_title }}</small>
                            </td>
                            <td>
                                <span class="badge badge-light-success" v-if="i._status === 1">Active</span>
                                <span class="badge badge-light-danger" v-else>Disabled</span>
                            </td>
                            <td>
                                <div class="dropdown">
                                <button class="btn btn-default btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class='bx bx-dots-vertical-rounded'></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" v-if="$cookies.get('permissions').includes('Edit')" :href="`team-mgt/${i.aduser_id}/edit`">Edit</a>
                                    <a class="dropdown-item" v-if="$cookies.get('permissions').includes('Edit')" @click.prevent="changePass(i.aduser_id, i.adfirst_name + ' ' + i.adlast_name)" href="#">Change Password</a>
                                    <a class="dropdown-item" v-if="$cookies.get('permissions').includes('Edit')" @click.prevent="statusChange(i.aduser_id, i._status)" href="#">{{ i._status === 1 ? 'Disable' : 'Enable' }}</a>
                                    <a class="dropdown-item" v-if="$cookies.get('permissions').includes('Delete')" @click.prevent="destory(i.aduser_id)" href="#">Delete</a>
                                </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <pagination :data="users" @pagination-change-page="loadApi"></pagination>
            </div>

            <vs-dialog blur prevent-close width="60%" v-model="popup">
                <section class="card" v-if="passDiv">
                    <header class="card-header">
                        <h4 class="card-title">Change Password for {{ title }}</h4>
                    </header>
                    <form class="card-body" @submit.prevent="updatePassword()" ref="form">
                        <div class="col-md-12">
                            <fieldset class="form-group">
                                <label :class="[errors.password ? 'danger' : '']" v-text="errors.password ? errors.password[0] : 'Password *'"></label>
                                <vs-input
                                    type="password"
                                    v-model="password"
                                    :visiblePassword="hasVisiblePassword"
                                    placeholder="Type Password"
                                    icon-after
                                    @click-icon="hasVisiblePassword = !hasVisiblePassword">
                                    <template #icon>
                                        <i v-if="!hasVisiblePassword" class='bx bx-show-alt'></i>
                                        <i v-else class='bx bx-hide'></i>
                                    </template>
                                </vs-input>
                            </fieldset>
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-dark glow shadow mr-1 mb-1">Update</button>
                        </div>
                    </form>
                </section>
            </vs-dialog>
    </section>
</template>

<script>
export default {
    data () {
        return {
            users: {},
            pagination: '',
            search: '',
            title: '',
            password: '',
            count: 0,
            passDiv: false,
            disabledDiv: false,
            deleteDiv: false,
            popup: false,
            hasVisiblePassword: false,
            userId: '',
            errors: []
        }
    },
    methods: {
        async loadApi (page = 1) {
            const loading = this.$vs.loading({
                target: this.$refs.table,
                color: 'dark'
            })
            try {
                const { data } = await axios.get(`${this.$base}team-js-list/${this.pagination}?page=${page}&search=${this.search}`)
                this.users = data[0]
                this.count = data[1]
                loading.close()
            } catch (err) {
                alert(err)
                loading.close()
            }
        },
        changePass(id, title) {
            this.userId = id
            this.title = title
            this.popup = true
            this.passDiv = true
            this.disabledDiv = false
        },
        async updatePassword() {
            const loading = this.$vs.loading({
                    target: this.$refs.form,
                    color: 'dark',
                    text: 'Processing...'
            })
            try {
                const { data } = await axios.put(`${this.$base}user-password-update`, {
                    userid: this.userId,
                    password: this.password
                })
                loading.close()
                this.$vs.notification({
                    color: 'dark',
                    title: 'Done',
                    text: data.msg
                })
                this.popup = false
                this.loadApi();
            } catch (err) {
                loading.close()
                if ( err.response.status == 422 ) {
                    this.errors = err.response.data.errors
                } else {
                    alert(err)
                }
            }
        },
        statusChange(id, status) {
            if ( confirm('Do you want to change status ?') ) {
                const loading = this.$vs.loading({
                        target: this.$refs.table,
                        color: 'dark',
                        text: 'Processing...'
                })
                axios.get(`${this.$base}user-status-update/${id}/${status}`).then( response => {
                    loading.close();
                    this.loadApi()
                }).catch( err => alert(err))
            }
        },
        destory (id) {
            if ( confirm('The operation will delete the user?') ) {
                if ( confirm('You can lose this data completely. Are you sure to remove?') ) {
                    const loading = this.$vs.loading({
                            target: this.$refs.table,
                            color: 'dark',
                            text: 'Processing...'
                    })
                    axios.delete(`${this.$base}team-mgt/${id}/`).then( response => {
                        loading.close();
                        this.$vs.notification({
                            color: 'dark',
                            title: 'Done',
                            text: response.data.msg
                        });
                        this.loadApi();
                    }).catch( err => alert(err))
                }
            }
        }
    },
    created () {
        this.loadApi()
    }
}
</script>
<style>
.vs-input {
    width: 100% !important;
}
.vs__search{
    height: 30px !important;
}
</style>
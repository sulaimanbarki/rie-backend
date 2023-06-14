<template>
    <section class="row" v-if="$cookies.get('permissions').includes('Read')">
        <div class="col-12 table-responsive">
            <a href="#" @click.prevent="openCreate()" v-if="$cookies.get('permissions').includes('Write')" class="btn btn-info shadow mr-1 mb-1">Create a Role</a>
            <table class="table table-hover table-striped mb-0" style="width: 100%" ref="table">
                <thead class="thead-dark">
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Role Title
                        </th>
                        <th>
                            Description
                        </th>
                        <th>
                            No. Of Modules
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
                    <tr v-for="(i, x) in roles.data" :key="x">
                        <td>
                            {{ x += 1}}
                        </td>
                        <td>
                            {{ i.adrole_title }}
                        </td>
                        <td>
                            {{ i.adrole_description }}
                        </td>
                        <td>
                            <a href="#" @click.prevent="openModules(i.adrole_id, i.adrole_title)">Modules Assigned</a>
                        </td>
                        <td>
                            <div class="badge badge-success mr-1 mb-1" v-if="i.adrole_status === 1">
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
                                        <a class="dropdown-item active" v-if="$cookies.get('permissions').includes('Edit')" @click.prevent="openEdit(i.adrole_id)" href="">Edit</a>
                                        <a class="dropdown-item" v-if="$cookies.get('permissions').includes('Edit')" @click.prevent="changeStatus(i.adrole_id, i.adrole_status)" href="">Change Status</a>
                                        <a class="dropdown-item" v-if="$cookies.get('permissions').includes('Write')" @click.prevent="assignModule(i.adrole_id, i.adrole_title)" href="">Assign Module</a>
                                        <a class="dropdown-item" v-if="$cookies.get('permissions').includes('Delete')" @click.prevent="remove(i.adrole_id)" href="">Remove</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <pagination :data="roles" @pagination-change-page="loadApi"></pagination>

            <vs-dialog blur prevent-close width="80%" v-model="isOpen">
                <template #header>
                    <h4 class="not-margin" v-if="moduleDiv !== true">
                        {{ createDiv ? 'Create a' : 'Edit'}}  <b>Role</b>
                    </h4>
                </template>


                <div class="con-form" v-if="createDiv">
                    <form class="row" @submit.prevent="create()" ref="form">
                        <div class="col-12">
                            <fieldset class="form-group">
                                <label :class="[errors.role ? 'danger' : '']" v-text="errors.role ? errors.role[0] : 'Role'"></label>
                                <vs-input dark type="text" v-model="role" placeholder="Type Role" />
                            </fieldset>
                        </div>
                        <div class="col-12">
                            <fieldset class="form-group">
                                 <h6 v-text="'Select Module'"></h6>
                                <vs-checkbox dark @change="changeInput()" v-for="(a, b) in modules" :key="b" :val="a.value" v-model="selectedModules" style="float: left">
                                    {{ a.label }}
                                </vs-checkbox>
                            </fieldset>
                        </div>
                        <section class="col-md-12" v-if="selectedModules.length">
                            <div class="card" v-for="(i, x) in links" :key="x">
                                <header class="card-header">
                                    <h4 class="card-title">Links in <b>{{ selectedModules.length ? i.list.module.module_title : '' }}</b></h4>
                                </header>
                                <section class="card-body">
                                    <div class="center">
                                        <vs-checkbox v-for="(a, b) in i.list.links" :key="b" :val="a.modulelink_id" v-model="assigned_links" style="float: left">
                                            {{ a.link_title }}
                                        </vs-checkbox>
                                    </div>
                                </section>
                            </div>
                        </section>
                        <div class="col-12">
                            <fieldset class="form-group">
                                <label :class="[errors.description ? 'danger' : '']" v-text="errors.description ? errors.description[0] : 'Description'"></label>
                                <textarea class="form-control" v-model="description" rows="3" placeholder="Type Description if needed"></textarea>
                            </fieldset>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-dark glow shadow mr-1 mb-1">Create</button>
                        </div>
                    </form>
                </div>
                <div class="con-form" v-if="editDiv">
                    <form class="row" @submit.prevent="update()" ref="form">
                        <div class="col-12">
                            <fieldset class="form-group">
                                <label :class="[errors.role ? 'danger' : '']" v-text="errors.role ? errors.role[0] : 'Edit Role'"></label>
                                <input type="text" v-model="role" class="form-control" id="basicInput" placeholder="Type Role" />
                            </fieldset>
                        </div>
                        <div class="col-12">
                            <fieldset class="form-group">
                                <label :class="[errors.description ? 'danger' : '']" v-text="errors.description ? errors.description[0] : 'Edit Description'"></label>
                                <textarea class="form-control" v-model="description" rows="3" placeholder="Type Description if needed"></textarea>
                            </fieldset>
                        </div>
                        <div class="col-12">
                            <button type="submit" class="btn btn-dark glow shadow mr-1 mb-1">{{ createDiv ? 'Create' : 'Edit' }}</button>
                        </div>
                    </form>
                </div>
                <div v-if="moduleDiv">
                    <div class="card collapse-icon accordion-icon-rotate" ref="card">
                        <div class="card-header">
                            <h4 class="card-title">Modules Assigned to <b>{{ title }}</b></h4>
                        </div>
                        <div class="card-body">
                            <section class="col-md-12" v-for="(i, x) in assigned_modules" :key="x">
                                <h4 class="text-info">{{ x += 1 }}: {{ i.module }} <vs-button
                                    icon
                                    color="danger"
                                    style="float: right"
                                    @click="removeRoleModule(i.rolemodule_id)"
                                >
                                    <i class='bx bxs-trash' ></i>
                                </vs-button></h4>
                                <hr />
                                <table class="table table-stripped">
                                    <thead>
                                        <tr>
                                            <th>
                                                #
                                            </th>
                                            <th>
                                                Link Title
                                            </th>
                                            <th>
                                                Link
                                            </th>
                                            <th>
                                                Remove
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(a, b) in i.links" :key="b">
                                            <td>
                                                {{ b += 1 }}
                                            </td>
                                            <td>
                                                {{ a.link_title }}
                                            </td>
                                            <td>
                                                {{ a.link_val }}
                                            </td>
                                            <td>
                                                <vs-button
                                                    icon
                                                    color="danger"
                                                    border
                                                    style="float: right"
                                                    @click="removeLink(a.rolelink_id, a.adrole_id)"
                                                >
                                                    <i class='bx bxs-trash' ></i>
                                                </vs-button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </section>
                        </div>
                    </div>
                </div>
                <div v-if="assignDiv">
                    <div class="card collapse-icon accordion-icon-rotate" ref="card">
                        <div class="card-header">
                            <h4 class="card-title">Assign to Module & links to <b>{{ title }}</b></h4>
                        </div>
                        <form @submit.prevent="assignNewModule" class="card-body">
                            <div class="col-12">
                                <button type="submit" class="btn btn-dark glow shadow mr-1 mb-1">Add Module</button>
                            </div>
                            <div class="col-12">
                                <fieldset class="form-group">
                                    <h6 :class="[errors.selectedModules ? 'danger' : '']" v-text="errors.selectedModules ? errors.selectedModules[0] : 'Select Module'"></h6>
                                    <vs-checkbox dark @change="changeInput()" v-for="(a, b) in modules" :key="b" :val="a.value" v-model="selectedModules" style="float: left">
                                        {{ a.label }}
                                    </vs-checkbox>
                                </fieldset>
                            </div>
                            <section class="col-md-12" v-if="selectedModules.length">
                                <div class="card" v-for="(i, x) in links" :key="x">
                                    <header class="card-header">
                                        <h4 class="card-title">Links in <b>{{ selectedModules.length ? i.list.module.module_title : '' }}</b></h4>
                                    </header>
                                    <section class="card-body">
                                        <label :class="[errors.assigned_links ? 'danger' : '']" v-text="errors.assigned_links ? errors.assigned_links[0] : ''"></label>
                                        <div class="center">
                                            <vs-checkbox v-for="(a, b) in i.list.links" :key="b" :val="a.modulelink_id" v-model="assigned_links" style="float: left">
                                                {{ a.link_title }}
                                            </vs-checkbox>
                                        </div>
                                    </section>
                                </div>
                            </section>
                        </form>
                    </div>
                </div>
            </vs-dialog>

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
            roles: {},
            description: '',
            role: '',
            modules: [],
            selectedModules: [],
            links: [],
            assigned_links: [],
            assigned_modules: [],
            errors: [],
            title: '',
            editId: '',
            isOpen: false,
            createDiv: false,
            editDiv: false,
            moduleDiv: false,
            assignDiv: false
        }
    },
    methods: {
        async loadApi (page = 1) {
            const loading = this.$vs.loading({
                target: this.$refs.table,
                color: 'dark'
            })
            try {
                const { data } = await axios.get(`${this.$base}role-js?page=${page}`)
                this.roles = data
                loading.close()
            } catch (err) {
                alert(err)
                loading.close()
            }
        },
        async openCreate() {
            try {
                this.isOpen = this.createDiv = true 
                this.editDiv = false
                this.moduleDiv = false
                this.assignDiv = false
                const { data } = await axios.get(`${this.$base}modules-dropdown`)
                this.modules = data
            } catch( err ) {
                alert(err)
            }
        },
        async changeInput () {
            const loading = this.$vs.loading({
                target: this.$refs.form,
                color: 'dark',
                text: 'Processing...'
            })
            try {
                const { data } = await axios.post(`${this.$base}module-link-via-module`, {
                    modules: this.selectedModules
                })
                this.links = data;
                loading.close();
            } catch( err ) {
                alert(err);
                loading.close();
            }
        },
        async create () {
            const loading = this.$vs.loading({
                target: this.$refs.form,
                color: 'dark',
                text: 'Processing...'
            })
            try {
                const { data } = await axios.post(`${this.$base}roles-mgt`, {
                    role: this.role,
                    description: this.description,
                    assigned_links: this.assigned_links,
                    selectedModules: this.selectedModules
                });
                loading.close()
                this.$vs.notification({
                    color: 'dark',
                    title: 'Done',
                    text: data.msg
                })
                this.isOpen = false
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
        async openEdit (id) {
            const loading = this.$vs.loading({
                target: this.$refs.form,
                color: 'dark',
                text: 'Processing...'
            })
            try {
                this.isOpen = true
                this.createDiv = false
                this.moduleDiv = false
                this.editDiv = true
                this.assignDiv = false
                this.editId = id
                const { data } = await axios.get(`${this.$base}roles-mgt/${id}`)
                this.role = data.adrole_title
                this.description = data.adrole_description
                loading.close()
            } catch (err) {
                alert(err)
                loading.close()
            }
        },
        async update () {
            const loading = this.$vs.loading({
                target: this.$refs.form,
                color: 'dark',
                text: 'Processing...'
            })
            try {
                const { data } = await axios.put(`${this.$base}roles-mgt/${this.editId}`, {
                    role: this.role,
                    description: this.description
                });
                loading.close()
                this.$vs.notification({
                    color: 'dark',
                    title: 'Done',
                    text: data.msg
                })
                this.isOpen = false
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
        async changeStatus (id, status) {
            if ( confirm('Do you want to change status of this role?')) {
                const loading = this.$vs.loading({
                    target: this.$refs.table,
                    color: 'dark',
                    text: 'Processing...'
                })
                try {
                    const { data } = await axios.get(`${this.$base}role_status/${id}/${status}`)
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
                    const { data } = await axios.delete(`${this.$base}roles-mgt/${id}`)
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
        async getRoleBaseModule(id) {
            const loading = this.$vs.loading({
                target: this.$refs.card,
                color: 'dark',
                text: 'Processing...'
            })
            try {
                const { data } = await axios.get(`${this.$base}get-role-base-modules/${id}`)
                this.assigned_modules = data
                loading.close()
            }catch(err) {
                alert(err)
                loading.close()
            }
        },
        async openModules (id, title) {
            
            try {
                this.isOpen = true
                this.editDiv = this.createDiv = false
                this.moduleDiv = true
                this.assignDiv = false
                this.title = title
                this.getRoleBaseModule(id);

            } catch ( err ) {
                alert(err)
            }
        },
        async removeLink(roleLinkid, roleId) {
            try {
                if( confirm('Do you want to remove the link from the role?') ) {
                    const { data } = await axios.delete(`${this.$base}remove-link-role/${roleLinkid}`)
                    this.$vs.notification({
                        color: 'dark',
                        title: 'Done',
                        text: data.msg
                    })
                    this.getRoleBaseModule(roleId)
                }
            }catch(err) {
                alert(err)
            }
        },
        async removeRoleModule(rolemoduleId) {
            try {
                if( confirm('Do you want to remove the module from the role?. This may remove entire links within the module.') ) {
                    if ( confirm('Are you sure about this operation?') ) {
                        const { data } = await axios.delete(`${this.$base}remove-module-role/${rolemoduleId}`)
                        this.$vs.notification({
                            color: 'dark',
                            title: 'Done',
                            text: data.msg
                        })
                        this.isOpen = false
                        console.log(data.msg)
                    }
                }
            } catch(err) {
                alert(err)
            }
        },
        async assignModule (id, title) {
            this.isOpen = true
            this.editDiv = this.createDiv = false
            this.moduleDiv = false
            this.assignDiv = true
            this.title = title
            this.editId = id
            const { data } = await axios.get(`${this.$base}modules-dropdown`)
            this.modules = data
        },
        async assignNewModule() {
            const loading = this.$vs.loading({
                target: this.$refs.form,
                color: 'dark',
                text: 'Processing...'
            })
            try {
                const { data } = await axios.post(`${this.$base}assign-modules`, {
                    assigned_links: this.assigned_links,
                    selectedModules: this.selectedModules,
                    roleId: this.editId
                });
                loading.close()
                this.$vs.notification({
                    color: 'dark',
                    title: 'Done',
                    text: data.msg
                })
                this.isOpen = false
                this.loadApi();

            } catch ( err ) {
                loading.close()
                if ( err.response.status == 422 ) {
                    this.errors = err.response.data.errors
                } else {
                    alert(err)
                }
            }
        }
    },
    created () {
        this.loadApi()
    }
}
</script>
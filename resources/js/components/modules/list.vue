<template>
    <section class="row" v-if="$cookies.get('permissions').includes('Read')">
        <section class="col-md-6">
            <div class="badge badge-primary mr-1 mb-1">Total Module: <b>{{ count }}</b></div>
        </section>
        <section class="col-md-6">
            <vs-input
                v-model="search"
                @keyup="loadApi()"
                dark placeholder="Search a Module or Link" style="float: right" />
        </section>
        <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>
                                S#
                            </th>
                            <th>Module</th>
                            <th>Order</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(i, x) in modules" :key="x">
                            <td>
                                {{ x += 1 }}
                            </td>
                            <td>
                                {{ i.module_title }}
                            </td>
                            <td>
                                {{ i._order }}
                            </td>
                            <td>
                                <div class="dropdown">
                                <button class="btn btn-default btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class='bx bx-dots-vertical-rounded'></i>
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a v-if="$cookies.get('permissions').includes('Edit')" class="dropdown-item" :href="`modules-mgt/${i.module_id}/edit`">Edit</a>
                                    <a v-if="$cookies.get('permissions').includes('Read')" class="dropdown-item" @click.prevent="showLinks(i.module_id, i.module_title)" href="#">Show All Links</a>
                                    <a v-if="$cookies.get('permissions').includes('Delete')" class="dropdown-item" @click.prevent="destory(i.module_id)" href="#">Delete</a>
                                </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <vs-dialog blur prevent-close width="60%" v-model="popup">
                <section class="card">
                    <header class="card-header">
                        <h4 class="card-title">Links of {{ title }}</h4>
                    </header>
                    <section class="card-body">
                        <form @submit.prevent="createLink()" class="row" v-if="$cookies.get('permissions').includes('Write')">
                            <section class="col-md-6">
                                <fieldset class="form-group">
                                    <label :class="[errors.link_title ? 'danger' : '']" v-text="errors.link_title ? errors.link_title[0] : 'Link Title *'"></label>
                                    <vs-input
                                    dark 
                                    style="width: 100% !important"
                                    v-model="link_title" placeholder="Type Link Title" />
                                </fieldset>
                            </section>
                            <section class="col-md-6">
                                <fieldset class="form-group">
                                    <label :class="[errors.link ? 'danger' : '']" v-text="errors.link ? errors.link[0] : 'Link Address *'"></label>
                                    <vs-input
                                    dark 
                                    style="width: 100% !important"
                                    v-model="link" placeholder="Type Link" />
                                </fieldset>
                            </section>
                            <section class="col-md-6">
                                <fieldset class="form-group">
                                    <label :class="[errors.visibilty ? 'danger' : '']" v-text="errors.visibilty ? errors.visibilty[0] : 'Link Visibilty *'"></label>
                                    <vs-input
                                    dark
                                    type="number"
                                    style="width: 100% !important"
                                    v-model="visibilty" placeholder="Type 1 for visibilty & 0 for ivisiblity" />
                                </fieldset>
                            </section>
                            <section class="col-md-12">
                                <button type="submit" class="btn btn-dark glow shadow mr-1 mb-1">Create</button>
                            </section>
                        </form>

                        <hr />

                        <table class="table table-stripped" ref="table" v-if="$cookies.get('permissions').includes('Read')">
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
                                        Visibility
                                    </th>
                                    <th>
                                        Options
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(i,x) in links" :key="x">
                                    <td>
                                        {{ x += 1 }}
                                    </td>
                                    <td>
                                        {{ i.link_title }}
                                    </td>
                                    <td>
                                        {{ i.link_val }}
                                    </td>

                                    <td>
                                        <span class="badge badge-light-success" v-if="i._visiblity === 1">Visible</span>
                                        <span class="badge badge-light-danger" v-else>Invisible</span>
                                    </td>
                                    <td>
                                        <vs-button
                                            v-if="$cookies.get('permissions').includes('Delete')"
                                            icon
                                            color="danger"
                                            border
                                            @click="removeLink(i.modulelink_id)"
                                        >
                                            <i class='bx bx-trash-alt'></i>
                                        </vs-button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </section>
                </section>
            </vs-dialog>
    </section>
</template>

<script>
export default {
    data () {
        return {
            modules: [],
            search: '',
            title: '',
            links: [],
            count: 0,
            link_title: '',
            link: '',
            visibilty: '',
            popup: false,
            moduleId: '',
            errors: []
        }
    },
    methods: {
        async loadApi () {
            const loading = this.$vs.loading({
                target: this.$refs.table,
                color: 'dark'
            })
            try {
                const { data } = await axios.get(`${this.$base}modules-js?search=${this.search}`)
                this.modules = data[0]
                this.count = data[1]
                loading.close()
            } catch (err) {
                alert(err)
                loading.close()
            }
        },
        async renderLinkList (id) {
            const loading = this.$vs.loading({
                target: this.$refs.table,
                color: 'dark'
            })
            const { data } = await axios.get(`${this.$base}module-based-links/${id}`);
            this.links = data
            loading.close();
        },
        async showLinks (id, title) {
            this.popup = true
            this.title = title
            this.moduleId = id
            this.renderLinkList(id)
        },
        async createLink() {
            const loading = this.$vs.loading({
                target: this.$refs.table,
                color: 'dark'
            })
            try {
                const { data } = await axios.post(`${this.$base}module-add-link/${this.moduleId}`, {
                    link_title: this.link_title,
                    link: this.link,
                    visibilty: this.visibilty
                })
                loading.close()
                this.$vs.notification({
                    color: 'dark',
                    title: 'Done',
                    text: data.msg
                })
                this.renderLinkList(this.moduleId);
            } catch( err ) {
                loading.close()
                if ( err.response.status == 422 ) {
                    this.errors = err.response.data.errors
                } else {
                    alert(err)
                }
            }
        },
        async removeLink (id) {
            try {
                if ( confirm('Do You want to remove the link?') ) {
                    const { data } = await axios.delete(`${this.$base}delete-a-link/${id}`);
                        this.$vs.notification({
                        color: 'dark',
                        title: 'Done',
                        text: data.msg
                    });
                    this.renderLinkList(this.moduleId);
                }
            } catch (err) {
                alert(err)
            }
        },
        destory (id) {
            if ( confirm('The operation will delete the module?') ) {
                if ( confirm('You can lose this data completely. Are you sure to remove?') ) {
                    const loading = this.$vs.loading({
                            target: this.$refs.table,
                            color: 'dark',
                            text: 'Processing...'
                    })
                    axios.delete(`${this.$base}modules-mgt/${id}/`).then( response => {
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
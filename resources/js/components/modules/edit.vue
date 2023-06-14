<template>
    <form class="row" ref="form" @submit.prevent="update()" v-if="$cookies.get('permissions').includes('Edit')">
        <div class="col-md-6">
            <fieldset class="form-group">
                <label :class="[errors.module_title ? 'danger' : '']" v-text="errors.module_title ? errors.module_title[0] : 'Module Title *'"></label>
                <vs-input
                dark 
                style="width: 100% !important"
                v-model="module_title" placeholder="Type Module Title" />
            </fieldset>
        </div>
        <div class="col-md-6">
            <fieldset class="form-group">
                <label :class="[errors.order ? 'danger' : '']" v-text="errors.order ? errors.module_title[0] : 'Module Order *'"></label>
                <vs-input
                dark
                type="number"
                style="width: 100% !important"
                v-model="order" placeholder="Type Module Order" />
            </fieldset>
        </div>
        <label style="margin-left: 20px;" :class="[errors.links ? 'danger' : '']" v-text="errors.links ? errors.links[0] : 'Add Links *'"></label>
        <vue-cloneya :maximum="10" v-model="links" :multiple="true" class="col-md-12">
            <div class="input-group col-md-12" style="margin-bottom: 10px;">
                <!-- Add the "v-cloneya-input" directive to elements you wish to set v-bind:value -->
                <!-- Only input, select, radio, checkbox etc. -->
                <input type="text" class="form-control" placeholder="Sub Link" v-cloneya-input="'title'">
                <input type="text" class="form-control" placeholder="Link Address" v-cloneya-input="'link'">
                <input type="number" @keyup="CheckValue" min="0" max="1" class="form-control" placeholder="Link Visibilty" v-cloneya-input="'visibilty'">
                <span class="input-group-btn">
                    <!-- Add the "v-cloneya-add" directive to elements you wish to add the click listener
                    that will clone the root element -->
                    <button type="button" class="btn btn-success" tabindex="-1" v-cloneya-add>
                        <i class='bx bx-plus'></i>
                    </button>
                    <!-- Add the "v-cloneya-remove" directive to elements you wish to add the click listener
                    that will remove the element -->
                    <button type="button" class="btn btn-danger" tabindex="-1"  v-cloneya-remove>
                        <i class='bx bx-minus' ></i>
                    </button>
                </span>
            </div>
        </vue-cloneya>
        <div>
            &nbsp;
        </div>

        <div class="col-md-12">
            <button type="submit" class="btn btn-dark glow shadow mr-1 mb-1">Edit</button>
        </div>
    </form>
</template>
<style>
.vs-input {
    width: 100%;
}
.vs__search{
    height: 30px !important;
}

</style>

<script>
export default {
    props: ['module'],
    data () {
        return {
            module_title: '',
            order: '',
            links: [],
            errors: [],
        }
    },
    methods: {
        async update () {
            const loading = this.$vs.loading({
                target: this.$refs.form,
                color: 'dark',
                text: 'Processing...'
            })
            try {
                const { data } = await axios.put(`${this.$base}modules-mgt/${this.module[0].module_id}`, {
                    module_title: this.module_title,
                    links: this.links,
                    order: this.order
                });
                loading.close()
                this.$vs.notification({
                    color: 'dark',
                    title: 'Done',
                    text: data.msg
                })
                this.isOpen = false

            } catch (err) {
                loading.close()
                if ( err.response.status == 422 ) {
                    this.errors = err.response.data.errors
                } else {
                    alert(err)
                }
            }
        },
        CheckValue (e) {
            if ( e.target.value > 1 ) {
                e.target.value = ''
            }
        },
    },
    created () {
        this.module_title = this.module[0].title
        this.order = this.module[0]._order
        this.links = this.module[0].links.map(val => {
            return {
                title: val.link_title,
                link: val.link_val,
                visibilty: val._visiblity
            }
        })
    }
}
</script>
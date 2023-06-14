<template>
    <form class="row" ref="form" @submit.prevent="update()" v-if="$cookies.get('permissions').includes('Write')">
       
       <div class="col-md-12">
            <fieldset class="form-group"> 
                <label :class="[errors.link_type ? 'danger' : '']" v-text="errors.link_type ? errors.link_type[0] : 'Footer Section *'"></label>
                 <select class="form-control" id="basicSelect">
                    <option value="category-section">Category Section</option>
                    <option value="product-section">Product Section</option>
                    <option value="quick-link">Quick Links</option>
                </select>
            </fieldset>
        </div>

        <div class="col-md-6">
            <fieldset class="form-group">
                <label :class="[errors.link_title ? 'danger' : '']" v-text="errors.link_title ? errors.link_title[0] : 'Link Title *'"></label>
                <vs-input
                dark 
                style="width: 100% !important"
                v-model="link_title" placeholder="Type link title" />
            </fieldset>
        </div>

        <div class="col-md-6">
            <fieldset class="form-group">
                <label :class="[errors.link ? 'danger' : '']" v-text="errors.link ? errors.link[0] : 'Link *'"></label>
                <vs-input
                dark 
                style="width: 100% !important"
                v-model="link" placeholder="Type link" />
            </fieldset>
        </div>

       
        <div class="col-md-12">
            <button type="submit" class="btn btn-dark glow shadow mr-1 mb-1">Update</button>
        </div>
    </form>
</template>
<style>
.vs-input {
    width: 100%;
}
.vs__clear{
    display: none;
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
    props: ['id'],
    data () {
        return {
            link_type:'',
            link:'',
            link_title:'',
            linkstype: [
                { title: "Category Section"},
                { title: "Product Section"},
                { title: "Quick Link"},
            ],
            errors: [],
        }
    },
    methods: {
       
        async loadApi () {
            try {
                const { data } = await axios.get(`${this.$base}footerlink-edit-js/${this.id}`)
                this.link_title = data['footer_linkname']
                this.link = data['footer_link']
                this.link_type = data['footer_linktype']
                
                
            } catch (err) {
                alert(err)
            }
        },
        async update () {
            const loading = this.$vs.loading({
                target: this.$refs.form,
                color: 'dark',
                text: 'Processing...'
            })
            try {
                const { data } = await axios.post(`${this.$base}footerlink-update`, {
                    footerlinkid: this.id,
                    link_type: this.link_type,
                    link: this.link,
                    link_title: this.link_title
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
    },
    created () {
        this.loadApi()
    }
}
</script>
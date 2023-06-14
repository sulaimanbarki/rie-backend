<template>
    <form class="row" ref="form" @submit.prevent="create()" v-if="$cookies.get('permissions').includes('Write')">
        <div class="col-md-6">
            <fieldset class="form-group">
                <label :class="[errors.page_title ? 'danger' : '']"
                    v-text="errors.page_title ? errors.page_title[0] : 'Page Title *'"></label>
                <vs-input dark style="width: 100% !important" v-model="page_title" placeholder="Page title" />
            </fieldset>
        </div>

        <div class="col-md-6">
            <fieldset class="form-group">
                <label :class="[errors.menu_id ? 'danger' : '']"
                    v-text="errors.menu_id ? errors.menu_id[0] : 'Menus *'"></label>
                <v-select :options="menus" v-model="menu_id" placeholder="Select menus"></v-select>
            </fieldset>
        </div>

        <div class="col-md-6">
            <fieldset class="form-group">
                <label :class="[errors.page_buttonlabel ? 'danger' : '']"
                    v-text="errors.page_buttonlabel ? errors.page_buttonlabel[0] : 'Page Button Label *'"></label>
                <vs-input dark style="width: 100% !important" v-model="page_buttonlabel" placeholder="Button label" />
            </fieldset>
        </div>

        <div class="col-md-6">
            <fieldset class="form-group">
                <label :class="[errors.page_url ? 'danger' : '']"
                    v-text="errors.page_url ? errors.page_url[0] : 'Page Url *'"></label>
                <vs-input dark style="width: 100% !important" v-model="page_url" placeholder="Page url" />
            </fieldset>
        </div>

        <div class="col-md-12">
            <fieldset class="form-group">
                <label :class="[errors.page_summary ? 'danger' : '']"
                    v-text="errors.page_summary ? errors.page_summary[0] : 'Page Summary'"></label>
                <textarea v-model="page_summary" placeholder="Write page summary" class="form-control"></textarea>
            </fieldset>
        </div>

        <div class="col-md-12">
            <fieldset class="form-group">
                <label :class="[errors.page_details ? 'danger' : '']"
                    v-text="errors.page_details ? errors.page_details[0] : 'Page Details'"></label>
                <textarea v-model="page_details" placeholder="Write page details" class="form-control"></textarea>
            </fieldset>
        </div>
        
        <div class="col-md-6">
            <fieldset class="form-group">
                <label :class="[errors.img ? 'danger' : '']" v-text="errors.img ? errors.img[0] : 'Page Cover'"></label>
                <input type="file" @change="onImageChange" class="form-control" />
            </fieldset>
        </div>

        <div class="col-md-12">
            <button type="submit" class="btn btn-dark glow shadow mr-1 mb-1">Create</button>
        </div>
    </form>
</template>
<style>
    .vs-input {
        width: 100%;
    }

    .vs__search {
        height: 30px !important;
    }

    .vs__selected {
        font-size: 13px !important;
        background-color: #ecf0f1;
        border: 1px solid #222;
        border-radius: 2px;
        color: #222;
        line-height: 2px;
        padding: 5px;
        border-radius: 5px;
    }

    .pac-container {
        background-color: white;
        position: absolute !important;
        z-index: 1000;
        border-radius: 0;
        border: 1px solid #ecf0f1;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-shadow: none;
        box-sizing: border-box;
        overflow: hidden
    }

    .pac-logo:after {
        content: "";
        padding: 1px 1px 1px 0;
        height: 16px;
        text-align: right;
        display: block;
        background-image: none !important;
    }

    .hdpi.pac-logo:after {
        background-image: none !important;
    }

    .pac-item {
        cursor: pointer;
        padding: 8px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        line-height: 30px;
        text-align: left;
        font-size: 13px;
        color: #ccc;
    }

    .pac-item:hover {
        background-color: #999;
        color: #222;
    }

    .pac-item-selected,
    .pac-item-selected:hover {
        background-color: #999;
    }

    .pac-matched {
        font-weight: 700
    }

    .pac-item-query {
        font-size: 13px;
        padding-right: 3px;
        color: #222;
    }

    .pac-item-query:hover {
        color: #000 !important;
    }

    .pac-icon {
        width: 15px;
        height: 20px;
        margin-right: 7px;
        margin-top: 6px;
        display: inline-block;
        vertical-align: top;
        background-image: none;
    }

    .hdpi .pac-icon {
        background-image: none;
    }

    .pac-icon-search {
        background-position: -1px -1px
    }

    .pac-item-selected .pac-icon-search {
        background-position: -18px -1px
    }

    .pac-icon-marker {
        background-position: -1px -161px
    }

    .pac-item-selected .pac-icon-marker {
        background-position: -18px -161px
    }

    .pac-placeholder {
        color: #222;
    }
</style>

<script>
export default {
    data() {
        return {
            page_title: '',
            page_summary: '',
            page_details: '',
            page_buttonlabel: '',
            page_url: '',
            menus: [],
            menu_id: '',
            img: '',
            errors: [],
        }
    },
    methods: {
        async loadMenus() {
            try {
                const { data } = await axios.get(`${this.$base}menus-dropdown-list`)
                this.menus = data
            } catch (err) {
                alert(err)
            }
        },
        onImageChange(e) {
            this.img = e.target.files[0];
        },
        async create() {
            const loading = this.$vs.loading({
                target: this.$refs.form,
                color: 'dark',
                text: 'Processing...'
            })
            try { 
                const config = {
                    headers: { 'content-type': 'multipart/form-data' } 
                }
 
                let formData = new FormData();
                formData.append('img', this.img);
                formData.append('page_title', this.page_title);
                formData.append('menu_id', this.menu_id['value']);
                formData.append('page_summary', this.page_summary);
                formData.append('page_details', this.page_details);
                formData.append('page_buttonlabel', this.page_buttonlabel);
                formData.append('page_url', this.page_url);
                
                const { data } = await axios.post(`${this.$base}pages-mgt`, formData, config);
                loading.close()
                this.$vs.notification({
                    color: 'dark',
                    title: 'Done',
                    text: data.msg
                })

                this.page_title = '';
                this.page_summary = '';
                this.page_details = '';
                this.page_buttonlabel = '';
                this.page_url = '';
                this.menu_id = '';

                
                this.isOpen = false
                this.loadApi();

            } catch (err) {
                loading.close()
                if (err.response.status == 422) {
                    this.errors = err.response.data.errors
                } else {
                    alert(err)
                }
            }
        },
    },
    created() {
        this.loadMenus();
    }
}
</script>
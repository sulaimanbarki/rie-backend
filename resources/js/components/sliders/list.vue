<template>
    <section class="row" v-if="$cookies.get('permissions').includes('Read')">
        <div class="col-12 table-responsive">
            <a href="#" @click.prevent="openCreate()" v-if="$cookies.get('permissions').includes('Write')" class="btn btn-info shadow mr-1 mb-1">Add Slider</a>
            <table class="table table-hover table-striped mb-0" style="width: 100%" ref="table">
                <thead class="thead-dark">
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Event Title
                        </th>
                        <th>
                            Image
                        </th>
                        <th>
                            Order
                        </th>
                        <th>
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(i, x) in sliders.data" :key="x">
                        <td>
                            {{ x += 1}}
                        </td>
                        <td>
                            {{ i.slider_title }}
                        </td>
                        <td>
                            <img :src="i.slider_image" v-img style="width:130px" alt="">
                        </td>
                        <td>
                            {{ i.slider_order }}
                        </td>
                        <td>
                            <div class="btn-group mr-1 mb-1">
                                <div class="dropdown">
                                    <button type="button" class="btn btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Options
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        
                                        <a class="dropdown-item active" v-if="$cookies.get('permissions').includes('Edit')" @click.prevent="openEdit(i.slider_id)" href="">Edit</a>
                                        <a class="dropdown-item" v-if="$cookies.get('permissions').includes('Delete')" @click.prevent="remove(i.slider_id)" href="">Remove</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <pagination :data="sliders" @pagination-change-page="loadApi"></pagination>

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
            sliders: {},
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
                const { data } = await axios.get(`${this.$base}slider-js?page=${page}`)
                this.sliders = data
                loading.close()
            } catch (err) {
                alert(err)
                loading.close()
            }
        },
         openCreate() {
            window.location.href = 'slider-mgt/create'
        },
         openEdit (id) {
            window.location.href = `slider-mgt/${id}/edit`
        },
        async remove(id) {
            if ( confirm('This operation is irreversible. Do you want to delete this slider?')) {
                const loading = this.$vs.loading({
                    target: this.$refs.table,
                    color: 'dark',
                    text: 'Processing...'
                })
                try {
                    const { data } = await axios.delete(`${this.$base}slider-mgt/${id}`)
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
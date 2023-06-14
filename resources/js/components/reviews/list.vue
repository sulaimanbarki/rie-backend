<template>
    <section class="row" v-if="$cookies.get('permissions').includes('Read')">
        <div class="col-12 table-responsive">
            <a href="#" @click.prevent="openCreate()" v-if="$cookies.get('permissions').includes('Write')" class="btn btn-info shadow mr-1 mb-1">Add Review</a>
            <table class="table table-hover table-striped mb-0" style="width: 100%" ref="table">
                <thead class="thead-dark">
                    <tr>
                        <th>
                            #
                        </th>
                        <th>
                            Reviewer
                        </th>
                        <th>
                            Designation
                        </th>
                         <th>
                            Content
                        </th>
                        <th>
                            Options
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(i, x) in reviews.data" :key="x">
                        <td>
                            {{ x += 1}}
                        </td>
                        <td>
                            {{ i.review_name }}
                        </td>
                        <td>
                            {{ i.review_designation }}
                        </td>
                        <td>
                            {{ i.review_content }}
                        </td>
                        <td>
                            <div class="btn-group mr-1 mb-1">
                                <div class="dropdown">
                                    <button type="button" class="btn btn-sm btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Options
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right">
                                        
                                        <a class="dropdown-item active" v-if="$cookies.get('permissions').includes('Edit')" @click.prevent="openEdit(i.review_id)" href="">Edit</a>
                                        <a class="dropdown-item" v-if="$cookies.get('permissions').includes('Delete')" @click.prevent="remove(i.review_id)" href="">Remove</a>
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <pagination :data="reviews" @pagination-change-page="loadApi"></pagination>

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
            reviews: {},
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
                const { data } = await axios.get(`${this.$base}review-js?page=${page}`)
                this.reviews = data
                loading.close()
            } catch (err) {
                alert(err)
                loading.close()
            }
        },
         openCreate() {
            window.location.href = 'review-mgt/create'
        },
         openEdit (id) {
            window.location.href = `review-mgt/${id}/edit`
        },
        async remove(id) {
            if ( confirm('This operation is irreversible. Do you want to delete this role?')) {
                const loading = this.$vs.loading({
                    target: this.$refs.table,
                    color: 'dark',
                    text: 'Processing...'
                })
                try {
                    const { data } = await axios.delete(`${this.$base}review-mgt/${id}`)
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
<template>
  <form class="row" ref="form" @submit.prevent="update()" v-if="$cookies.get('permissions').includes('Edit')">
    <div class="col-md-6">
      <fieldset class="form-group">
        <label :class="[errors.first_name ? 'danger' : '']"
               v-text="errors.first_name ? errors.first_name[0] : 'First Name *'"></label>
        <vs-input
            dark
            style="width: 100% !important"
            v-model="first_name" placeholder="Type First Name"/>
      </fieldset>
    </div>
    <div class="col-md-6">
      <fieldset class="form-group">
        <label :class="[errors.last_name ? 'danger' : '']"
               v-text="errors.last_name ? errors.last_name[0] : 'Last Name *'"></label>
        <vs-input
            dark v-model="last_name" placeholder="Type Last Name"/>
      </fieldset>
    </div>
    <div class="col-md-6">
      <fieldset class="form-group">
        <label :class="[errors.city ? 'danger' : '']" v-text="errors.city ? errors.city[0] : 'City *'"></label>
        <input
            id="city"
            class="form-control"
            dark placeholder="Type City"/>
      </fieldset>
    </div>
    <div class="col-md-6">
      <fieldset class="form-group">
        <label :class="[errors.role_assigned ? 'danger' : '']"
               v-text="errors.role_assigned ? errors.role_assigned[0] : 'Roles *'"></label>
        <v-select :options="roles" v-model="role_assigned" multiple placeholder="Select Role/Roles"></v-select>
      </fieldset>
    </div>
    <div class="col-md-6">
      <fieldset class="form-group">
        <label :class="[errors.permission_assigned ? 'danger' : '']"
               v-text="errors.permission_assigned ? errors.permission_assigned[0] : 'Permissions *'"></label>
        <v-select :options="permissions" v-model="permission_assigned" multiple
                  placeholder="Select Permissions"></v-select>
      </fieldset>
    </div>
    <div class="col-md-6">
      <fieldset class="form-group">
        <label :class="[errors.img ? 'danger' : '']" v-text="errors.img ? errors.img[0] : 'Profile Image'"></label>
        <input type="file" @change="onImageChange" class="form-control"/>
      </fieldset>
    </div>
    <div class="col-md-12">
      <fieldset class="form-group">
        <label :class="[errors.img ? 'bio' : '']" v-text="errors.bio ? errors.img[0] : 'About/Bio'"></label>
        <textarea v-model="bio" placeholder="Write some bio" class="form-control"></textarea>
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
  color: $ secondary !important;
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
  props: ['userId'],
  data() {
    return {
      first_name: '',
      last_name: '',
      city: '',
      country: '',
      bio: '',
      roles: [],
      permissions: [],
      role_assigned: [],
      permission_assigned: [],
      img: '',
      errors: [],
      hasVisiblePassword: false
    }
  },
  methods: {
    onImageChange(e) {
      alert('changed')
      console.log(e.target.files[0])
      this.img = e.target.files[0];
    },
    loadCityApi() {
      this.$loader.load().then(google => {
        //
        let autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('city'), {types: ['(cities)']})

        autocomplete.setFields(['address_components', 'geometry', 'icon', 'name'])

        autocomplete.addListener('place_changed', () => {
          let place = autocomplete.getPlace()
          if (!place.geometry) {
            alert("No details available for input: '" + place.name + "'");
            return;
          }
          let statePosition = place.address_components.length - 2
          let countryPosition = place.address_components.length - 1
          this.country = place.address_components[countryPosition].long_name
          this.city = place.name
        })
        //
      });
    },
    async loadApi() {
      try {
        const {data} = await axios.get(`${this.$base}team-mgt/${this.userId}`)
        this.first_name = data[0].first_name
        this.last_name = data[0].last_name
        this.city = data[0].city
        this.country = data[0].country
        this.bio = data[0].bio
        this.role_assigned = data[0].roles.map(val => {
          return {
            value: val.adrole_id,
            label: val.adrole_title
          }
        })
        this.permission_assigned = data[0].permissions.map(val => {
          return {
            value: val.permission_id,
            label: val.permission_title
          }
        })
      } catch (err) {
        alert(err)
      }
    },
    async loadRoles() {
      try {
        const {data} = await axios.get(`${this.$base}roles-dropdown-list`)
        this.roles = data
      } catch (err) {
        alert(err)
      }
    },
    async loadPermissions() {
      try {
        const {data} = await axios.get(`${this.$base}permission-dropdown-list`)
        this.permissions = data
      } catch (err) {
        alert(err)
      }
    },
    async update() {
      const loading = this.$vs.loading({
        target: this.$refs.form,
        color: 'dark',
        text: 'Processing...'
      })
      try {
        const config = {
          headers: {'content-type': 'multipart/form-data'}
        }

        let formData = new FormData();
        formData.append('img', this.img);
        formData.append('first_name', this.first_name);
        formData.append('last_name', this.last_name);
        formData.append('username', this.username);
        formData.append('password', this.password);
        formData.append('city', this.city);
        formData.append('country', this.country);
        formData.append('bio', this.bio);
        var role_assigned = JSON.stringify(this.role_assigned);

        formData.append('role_assigned', role_assigned);

        var permission_assigned = JSON.stringify(this.permission_assigned);

        formData.append('permission_assigned', permission_assigned);

        const {data} = await axios.post(`${this.$base}update-team/${this.userId}`, formData, config);

        loading.close()
        this.$vs.notification({
          color: 'dark',
          title: 'Done',
          text: data.msg
        })
        window.location.href = this.$base + 'team-mgt';
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
    this.loadCityApi();
    this.loadRoles();
    this.loadPermissions();
    this.loadApi()
  }
}
</script>
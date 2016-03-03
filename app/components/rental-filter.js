import Ember from 'ember';

export default Ember.Component.extend({
  filter: null,
  filteredList: null,
  actions: {
    autoComplete() {
      console.log(this.get('filteredList'))
      this.get('autoComplete')(this.get('filter'));
    },
    search() {
      this.get('search')(this.get('filter'))
    },
    choose(city) {
      this.set('filter', city);
    }
  }
});

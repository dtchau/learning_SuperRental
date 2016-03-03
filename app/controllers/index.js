import Ember from 'ember';

export default Ember.Controller.extend({
  filteredList: null,
  _queryByCity(params) {
    return this.store.query('rental', {city: params});
  },
  actions: {
    autoComplete(params) {
      if (params !== '') {
        this._queryByCity(params).then(result => this.set('filteredList', result));
      } else {
        this.set('filteredList');
      }
    },
    search(params) {
      if (params !== '') {
        this._queryByCity(params).then(result => this.set('model', result));
      } else {
        this.set('model', this.store.findAll('rental'));
      }
    }
  }
});

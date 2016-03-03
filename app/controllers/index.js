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
        this.set('filteredList').clear();
      }
    },
    search(params) {
      console.log('search');
      if (params !== '') {
        this._queryByCity(params).then(result => {
          this.set('model', result);
          console.log(result);
        });
      } else {
        this.set('model').clear();
      }
    }
  }
});

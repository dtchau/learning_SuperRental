import Ember from 'ember';

const communityPropertyTypes = [
  'condo',
  'apartment',
  'townhouse'
];

export function rentalPropertyType([type]/*, hash*/) {
  if (communityPropertyTypes.contains(type.toLowerCase())) {
    return 'Community';
  }

  return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);

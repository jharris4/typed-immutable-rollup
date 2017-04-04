import { Record } from 'immutable';
import { Record as TypedRecord } from 'typed-immutable';

function aTestFunction() {
  let aFakeObject = {
    'immutable': new Record(),
    'typed-immutable': new TypedRecord()
  };
  return aFakeObject;
}

export default aTestFunction;
/* eslint-disable */
"use strict";

export default function Record (allowed) {
  const { defaults = {} } =  allowed;
  return (Parent = Object) => {
    return class _Record extends Parent {
      constructor (object) {
        super(object);
        const _defaults = {};
        // merge the object to this
        for (const key in defaults) {
          if (!(key in object)) {
            _defaults[key] = defaults[key];
          }
        }
        // filter using allowed
        Object.keys(object).forEach((key) => {
          key in allowed
          ? Object.assign(this, { [key]: object[key] })
          : '';
        })
        Object.assign(this, _defaults);
      }
    }
  }
}

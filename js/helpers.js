//Set multiple Attributes
export const setAttributes = (el, attrs) => {
    for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
      }
}

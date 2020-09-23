
/**
 * 
 * Returns the parent element of the selected DOM-element.
 * 
 * <example>
    :index.html
    <ul id="parent">
        <li><a href="/">Sibling One</a></li>
        <li><a href="/">Sibling Two</a></li>
        <li><a href="/">Sibling Three</a></li>
    </ul>
    :prev.js
    it('should get id from parent element', () => {
        const elem = $$('li');
        console.log(elem[2].parentEl().getAttribute('id')); // outputs: "parent"
    });
 * </example>
 *
 * @alias element.parentEl
 * @return {Element}
 * @type utility
 */

export default function parentEl () {
    return this.$(function () { return this.parentElement })
}
/**
 * @module observe
 *
 * @description
 * Wraps knockouts `observable` and `observableArray` functions.
 *
 * This helps decouple models and views from Knockout.
 *
 * Really, I did this because TypeScript in my IDE can't find the
 * `observable` and `observableArray` properties on `ko`, so it
 * gets highlighted as an error, and I woudl rather just have that
 * here then have it in every single model and view in the application.
 *
 */
import ko = require("lib/knockout");

export function prop(val: any) {
    return ko.observable(val);
}

export function array(val: Array) {
    return ko.observableArray(val);
}

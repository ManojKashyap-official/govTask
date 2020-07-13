/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
        fname: {
            type: "string",
            required: true
        },
        mname: {
            type: "string"
        },
        lname: {
            type: "string",
            required: true
        },
        company: {

            type: "string",
            required: true
        },
        email: {
            type: "string",
            required: true

        },
        dobPan: {
            type: "string",
        },
        panNo: {
            type: "string"
        },
        pin: {
            type: "string"
        },
        district: {
            type: "string"
        },
        state: {
            type: "string"
        },
        city: {
            type: "string"
        },
        adhaarAddress: {
            type: "string"
        },
        adhaarImg: {
            type: "string"
        },
        panImg: {
            type: "string"
        }

        //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
        //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
        //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


        //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
        //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
        //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


        //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
        //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
        //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    },

};
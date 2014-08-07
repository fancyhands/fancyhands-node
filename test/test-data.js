
var date = new Date();
var tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
var expiration_date = tomorrow.toISOString();


module.exports = {

    create_call: {
        "phone": "8154553440",
        "conversation": {
            "id": "sample_conversation",
            "data": null,
            "name": "Sample Conversation",
            "version": 1.1,
            "scripts": [],
        },
        "test": true
    },

    create_custom: {
        "title": "this is the title",
        "description": "this is the body",
        "bid": 2,
        "expiration_date": expiration_date,
        "test": true
    }
}


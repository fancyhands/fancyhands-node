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
        "expiration_date": new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toISOString(),
        "test": true
    }
}


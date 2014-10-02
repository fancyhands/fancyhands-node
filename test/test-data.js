var incoming_call_key = "ahJkZXZ-ZmFuY3loYW5kcy1ocmRyGQsSDEluY29taW5nQ2FsbBiAgICAgICrCQw"

module.exports = {

    incoming_call_key: incoming_call_key,


    outgoing_call_create: {
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

    incoming_call_create: {
        "phone_number": "5854548939",
        "conversation": {
            "id": "sample_conversation",
            "data": null,
            "name": "Sample Conversation",
            "version": 1.1,
            "scripts": [],
        },
        "test": true
    },

    incoming_call_update: {
        "key": incoming_call_key,
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
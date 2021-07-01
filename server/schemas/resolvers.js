const { Book, User } = require('../models');

const resolvers = {
    Query: {
        book: async () => {
            return Book.find({});
        },
        user: async () => {
            return User.find({});
        }
    },
    Mutations: {
        createBook: async () => {
            const book = await Book.findOneAndUpdate(
                {},
                {},
                {}
            )
            return book;
        },
        createUser: async () => {
            const user = await User.findOneAndUpdate(
                {},
                {},
                {}
            );
            return user;
        }

    }
}

const graphql = require('graphql');
const {GraphQLSchema, GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList} = graphql;
const userData = require('../MOCK_DATA.json');
const UserType = require('./TypeDefs/UserType');

// Split into separate queries and mutations module
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",

    // Each field is equivalent to a REST endpoint
    fields: {
        // gerUserById: {
        //     type: new UserType(),
        //     args: {
        //         id: {type: GraphQLInt},
        //     },
            
        //     resolve(parent, args) {
        //         // database query
        //         return userData 
        //     },
        // },
        getAllUsers: {
            type: new GraphQLList(UserType),
            args: {
                limit: {type: GraphQLInt},
            },
            
            resolve(parent, args) {
                // return userData;
                return userData.slice(0, args.limit);
            },
        },
    }
});




const Mutation  = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createUser:{
            type: UserType,
            args:{
                firstName: {type: GraphQLString},
                lastName: {type: GraphQLString},
                email: {type: GraphQLString},
                password: {type: GraphQLString},
            },
            resolve(parent, args) {
                userData.push({
                    id: userData.length + 1,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    password: args.password,
                });
                return args; // does not return id
            },

        }

    }
})



module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
});

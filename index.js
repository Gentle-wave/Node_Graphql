const {ApolloServer} = require("apollo-server");
const {typeDefs} = require("./schema/type-def");
const {resolvers} = require("./schema/resolvers");

const server = new ApolloServer({typeDefs, resolvers});
const PORT = 4000

server.listen(PORT).then(()=>{
    console.log(`Server is running on http://localhost:4000`)
})
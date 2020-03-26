const { GraphQLServer } = require('graphql-yoga')
const { importSchema } = require('graphql-import')
const { Prisma } = require('prisma-binding')



const resolvers = {
    Query: {
      pet(_, args, context, info){
        return context.prisma.query.pet(
          {
            where: {}
          }
        )
        info
      },
      // customer: (_, args, context, info) => {
      //   return context.prisma.query.customer,
      //   info
      // },
    },
    Mutation: {
      createPet(_, {id, name}, context){
        return context.prisma.mutation.createPet(
          {
              id, name
              // species: args.species,
              // imgUrl: args.imgUrl,
              // description: args.description,
              // available: args.available,
              // adoptionFee: args.adoptionFee
          },
        )
      },
    //   publish: (_, args, context, info) => {
    //     return context.prisma.mutation.updatePost(
    //       {
    //         where: {
    //           id: args.id,
    //         },
    //         data: {
    //           published: true,
    //         },
    //       },
    //       info,
    //     )
    //   },
    //   deletePost: (_, args, context, info) => {
    //     return context.prisma.mutation.deletePost(
    //       {
    //         where: {
    //           id: args.id,
    //         },
    //       },
    //       info,
    //     )
    //   },
    //   signup: (_, args, context, info) => {
    //     return context.prisma.mutation.createUser(
    //       {
    //         data: {
    //           name: args.name,
    //         },
    //       },
    //       info,
    //     )
    //   },
    // },
  }
}

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:4466',
    }),
  }),
});
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))
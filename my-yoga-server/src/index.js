const { GraphQLServer } = require('graphql-yoga')
const { importSchema } = require('graphql-import')
const { Prisma } = require('prisma-binding')


const resolvers = {
    Query: {
      pets(_, args, context, info){
        return context.prisma.query.pets()
        info
      },
      pet(_, args, context, info){
        return context.prisma.query.pet(
          {
            where: { id: args.id }
          }
        )
      }
    },
    Mutation: {
      createPet: (_, args, context, info) => {
        const { name, species, age, imageUrl, description, adoptionFee } = args;
        return context.prisma.mutation.createPet({
            data: {
              id,
              name,
              species,
              age,
              imageUrl,
              description,
              adoptionFee
            },
            info,
        });
      },
      updatePet: (_, args, context, info) => {
        const { name, species, age, imageUrl, description, adoptionFee } = args;
        return context.prisma.mutation.updatePet({
          where: {
            id: id,
          },
          data: {
            name,
            species,
            age,
            imageUrl,
            description,
            adoptionFee
          },
          info,
        });
      },
      deletePet: (_, args, context, info) => {
        return context.prisma.mutation.deletePet(
          {
            where: {
              id: args.id,
            },
          },
          info,
        )
      }
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
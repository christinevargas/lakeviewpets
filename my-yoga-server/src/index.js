const { GraphQLServer } = require('graphql-yoga')
const { Prisma } = require('prisma-binding')


// const yupValidation = {
//   async Mutation(resolve, root, args, context, info) {
//     const mutationField = info.schema.getMutationType().getFields()[info.fieldName];
//     const mutationValidationSchema = mutationField.validationSchema;
//     if (mutationValidationSchema) {
//       try {
//         const values = await mutationValidationSchema.validate(args);
//       } catch (error) {
//         if (error instanceof yup.ValidationError) {
//           return {
//             error: error.message,
//           };
//         } else {
//           throw error;
//         }
//       }
//     }
//     return resolve(root, args, context, info);
//   }
// }

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
    // Mutation: {
  //     createPet: {
  //       validationSchema: yup.object().shape({
  //         name: yup
  //           .string().required(),
  //         species: yup
  //           .string().required(),
  //         age: yup
  //           .number().required(),
  //         imageUrl: yup
  //           .string().required(),
  //         description: yup
  //           .string().required(),
  //         adoptionFee: yup
  //           .number().required()
  //       }),
  //       resolve: async (_, args, context, info) => {
  //         const { name, species, age, imageUrl, description, adoptionFee } = args;
          
  //         return context.prisma.mutation.createPet({
  //               data: {
  //                 id,
  //                 name,
  //                 species,
  //                 age,
  //                 imageUrl,
  //                 description,
  //                 adoptionFee
  //               },
  //               info,
  //           });
  //       },
  //     }
  //   },
  // }
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
  middlewares: [yupMutationMiddleware()],
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: 'src/generated/prisma.graphql',
      endpoint: 'http://localhost:4466',
    }),
  }),
});
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))
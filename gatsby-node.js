const path = require('path')

// exports.createPages = async ( {graphql,actions}) => {
//     const {data} = await graphql(`
//     query MyQuery {
//         allContentfulProduct {
//           edges {
//             node {
//             id
//             }
//           }
//         }
//       }
//     `)
//     data.allContentfulProduct.edges.forEach(edge => {
//         actions.createPage({
//             path:'/product/' + edge.node.id,

//             component: path.resolve('./src/templates/oneproduct.jsx'),
//             context: { id: edge.node.id }
//         })
//     });
// }


exports.createPages = async ( {graphql,actions}) => {
  const {data} = await graphql(`
  query MyQuery {
      allContentfulProject {
        edges {
          node {
          id
          }
        }
      }
    }
  `)
  data.allContentfulProject.edges.forEach(edge => {
      actions.createPage({
          path:'/project/' + edge.node.id,

          component: path.resolve('./src/templates/oneproject.jsx'),
          context: { id: edge.node.id }
      })
  });
}


// import { gql } from 'graphql-request';
// import { hygraph } from '$lib/utils/hygraph.js';

// export const load = async ({ params }) => {
// 	const slug = params.slug;
// 	let query = gql`
// 		query MyQuery($slug: String) {
// 			carouselImages(where: { slug: $slug }) {
// 				id
// 				createdAt
// 				images {
// 					url
// 				}
// 			}
// 		}
// 	`;

// 	let result = hygraph.request(query, { slug });
// 	return result;
// 	console.log(result);
// };


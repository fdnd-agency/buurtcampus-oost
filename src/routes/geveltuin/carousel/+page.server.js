import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export const load = async ({ params }) => {
	let query = gql`
		query MyQuery {
			carouselImages(where: { slug: "geveltuin" }) {
				id
				createdAt
				images {
					url
				}
			}
		}
	`;
	const slug = params.slug;
	let result = await hygraph.request(query, { slug });
	return result;
};

import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query MyQuery {
			heroHeaders {
				heading1
				description
				image {
					url
				}
			}

			abouts {
				createdAt
				description
				description2
				description3
				description4
				id
				title
			}
		}
	`;

	return await hygraph.request(query);
}

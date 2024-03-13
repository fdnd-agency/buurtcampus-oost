import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query MyQuery {
			kastHeaders {
				image {
					url
				}
			}
		}
	`;

	return await hygraph.request(query);
}

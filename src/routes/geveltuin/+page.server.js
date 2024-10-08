import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';
import { data } from '../+layout.svelte';

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
			geveltuins {
				id
				title
				bulletText1
				createdAt
				image {
					url
				}
			}

			facadeGardenActions {
				id
				title
				description
				bulletText2
				createdAt
			}
		}
	`;

	return await hygraph.request(query);
}

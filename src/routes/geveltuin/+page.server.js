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

			facadeGardenActions {
				id
				createdAt
				title
				description
				image {
					url
				}
				bulletText1
			}
			
			carouselImages {
				id
				createdAt
				images {
					url
				}
			}
		}
	`;

	return await hygraph.request(query);
}

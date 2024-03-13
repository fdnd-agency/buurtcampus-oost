import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query Assets {
			stekjes {
				aanmelddatum
				beschrijving
				fotos {
					url
				}
				naam
				slug
				landvanherkomst
				zonlicht
				watergeven
				categories {
					naam
				}
			}
			stekjesHeaders {
				image {
					url
				}
			}
		}
	`;

	return await hygraph.request(query);
}

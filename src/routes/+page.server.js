import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query MyQuery {
			stekjes {
				aanmelddatum
				beschrijving
				giftig
				slug
				voeding
				verpotten
				watergeven
				zonlicht
				onderhoud
				fotos {
					url
				}
			}
			agendas {
				cardImage {
					url
				}
				date
				event
				price
				address
				buttonText
			}
		}
	`;

	const data = await hygraph.request(query);
	return data;
}

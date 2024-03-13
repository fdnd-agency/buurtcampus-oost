import {gql} from 'graphql-request';
import {hygraph} from '$lib/utils/hygraph.js';

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
		}
	`;

    return await hygraph.request(query);
}

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
			overviewPages {
				titel
				product {
					... on Stekje {
						id
						aanmelddatum
						beschrijving
						createdAt
						categories {
							naam
						}
						giftig
						slug
						stekken
						temperatuur
						absoluteTemperatuur
						verpotten
						projectnaam
						voeding
						watergeven
						zonlicht
						onderhoud
						landvanherkomst
						naam
						fotos {
							url
						}
					}
				}
			}
		}
	`;

	return await hygraph.request(query);
}

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
						fotos {
							url
						}
						giftig
						naam
						landvanherkomst
						onderhoud
						slug
						stage
						stekken
						temperatuur
						voeding
						watergeven
						zonlicht
					}
				}
				cardSlide {
					titleCard
					imageCard {
						url
					}
					paragraphCard2
					paragraphCard
					imageCardAltText
				}
			}
		}
	`;

	return await hygraph.request(query);
}

import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export const load = async ({ params }) => {
	let query = gql`
		query Assets($slug: String) {
			stekje(where: { slug: $slug }) {
				beschrijving
				aanmelddatum
				fotos {
					url
					width
                  	height
				}
				giftig
				landvanherkomst
				naam
				temperatuur
				absoluteTemperatuur
				voeding
				verpotten
				watergeven
				zonlicht
			}
			
		}
	`;
	const slug = params.slug;
	let result = await hygraph.request(query, { slug });
	return result;
};
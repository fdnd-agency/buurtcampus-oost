import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export const load = async ({ params }) => {
	let query = gql`
		query Assets($slug: String) {
			zaden(where: { slug: $slug }) {
				naam
                beschrijving
				aanmelddatum
                zonlicht
                giftig
                landvanherkomst
				fotos {
					url
				}
				watergeven
                voeding
                temperatuur
				
            
        
			}
		}
	`;
	const slug = params.slug;
	// console.log(slug);
	let result = await hygraph.request(query, { slug });
	// console.log(result);
	return result;
};
import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query Homepage {
			herosSlider {
				sliderPicture {
					url
				}
			}
			cardSlides {
				titleCard
				paragraphCard
				paragraphCard2
				imageCard {
					url
				}
				imageCardAltText
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
			campusInfos {
				title
				title2
				paragraph
				paragraph2
			}
			partnersInfos {
				title
				paragraph
				paragraph2
			}
		}
	`;

	const data = await hygraph.request(query);
	return data;
}

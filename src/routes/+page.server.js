import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
		query Homepage {
			herosSlider {
				sliderPicture {
					url
				}
				sliderPictureAltText
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
				time
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
				createdAt
			}

			partners {
				createdAt
				id
				title
				subhead
				description
				image {
					url
				}
			}
		}
	`;

	const data = await hygraph.request(query);
	return data;
}

import {gql} from 'graphql-request';
import {hygraph} from '$lib/utils/hygraph.js';

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
		}	  
		
	`;

    return await hygraph.request(query);
}

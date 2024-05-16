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
		}	  
		
	`;

    return await hygraph.request(query);
}
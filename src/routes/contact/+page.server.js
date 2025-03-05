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
      contacts {
        title
        contactIntro
      }
		}
	`;

    return await hygraph.request(query);
}

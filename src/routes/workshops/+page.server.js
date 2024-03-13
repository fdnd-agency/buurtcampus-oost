import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

export async function load() {
	let query = gql`
  query MyQuery {
    workshops {
      naam
      locatie
      kosten
      id
      foto {
        url
      }
      datum
    }
    workshopHeaders {
      image {
        url
      }
    }
  }
	`;

	return await hygraph.request(query);
}

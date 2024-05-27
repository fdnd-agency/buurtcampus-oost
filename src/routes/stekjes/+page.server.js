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
                    verpotten
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

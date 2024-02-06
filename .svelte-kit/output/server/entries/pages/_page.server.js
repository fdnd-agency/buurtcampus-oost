import { gql } from "graphql-request";
import { h as hygraph } from "../../chunks/hygraph.js";
async function load() {
  let query = gql`
		query MyQuery {
			stekjes {
				aanmelddatum
				beschrijving
				giftig
				slug
				voeding
				verpotten
				watergeven
				zonlicht
				onderhoud
				fotos {
					url
				}
			}
		}
	`;
  return await hygraph.request(query);
}
export {
  load
};

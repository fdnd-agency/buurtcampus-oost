import { gql } from "graphql-request";
import { h as hygraph } from "../../../chunks/hygraph.js";
async function load() {
  let query = gql`
		query Assets {
			stekjes {
				aanmelddatum
				beschrijving
				fotos {
					url
				}
				naam
				slug
				landvanherkomst
				zonlicht
				watergeven
				categories {
					naam
				}
			}
			stekjesHeaders {
				image {
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

import { gql } from "graphql-request";
import { h as hygraph } from "../../../chunks/hygraph.js";
async function load() {
  let query = gql`
		query MyQuery {
			kastHeaders {
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

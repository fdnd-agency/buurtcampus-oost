import { gql } from "graphql-request";
import { h as hygraph } from "../../../chunks/hygraph.js";
async function load() {
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
export {
  load
};

import React from "react";
import ReactDOM from "react-dom";
import TypesenseInstantSearchAdapter from "typesense-instantsearch-adapter";
import {
  SearchBox,
  InstantSearch,
  Hits,
} from "react-instantsearch-dom";
import { NodeConfiguration } from "typesense/lib/Typesense/Configuration";

const typesenseNodeConfig = [
  {
    host: "qtg5aekc2iosjh93p.a1.typesense.net",
    port: 443,
    protocol: "https",
  },
];

const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
  server: {
    apiKey: "8hLCPSQTYcBuK29zY5q6Xhin7ONxHy99",
    nodes: typesenseNodeConfig,
  },
  // The following parameters are directly passed to Typesense's search API endpoint.
  collectionSpecificSearchParameters: {
    style_options: {
      query_by: "title",
      num_typos: "3,0,0,0",
    },
  },
});
const searchClient = typesenseInstantsearchAdapter.searchClient;

export default function Home() {
  return (
    <InstantSearch indexName="r" searchClient={searchClient}>
      <div>1</div>
    <SearchBox />
    <Hits />
  </InstantSearch>
  )
}

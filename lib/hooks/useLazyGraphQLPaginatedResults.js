/**
 * An helper to work with dynamic paginated lists coming from GraphQL, intended to reduce
 * the load on server by loading a bigger batch at the start and updating the list in cache manually.
 */
export const useLazyGraphQLPaginatedResults = (query, key) => {
  const limit = query?.variables?.limit || 0;
  const results = query?.data?.[key];

  if (!results) {
    return {
      nodes: [],
      totalCount: 0,
      offset: 0,
      limit: limit / 2,
    };
  }

  return {
    offset: query.variables.offset,
    limit: limit / 2,
    totalCount: results.totalCount,
    nodes: results.nodes.slice(0, limit),
  };
};

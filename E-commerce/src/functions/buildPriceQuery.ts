function buildPriceQuery(prices: string[]): string[] {
  if (prices.length === 0) {
    return [];
  } else {
    const queries: string[] = [];

    for (let range of prices) {
      range = range.trim();

      // Handle "All"
      if (range === "All") {
        queries.push(`price_gte=0`);
        continue;
      }

      // Handle "& Over"
      if (range.includes("& Over")) {
        const min = parseInt(range.replace(/[^0-9]/g, ""), 10);
        queries.push(`price_gte=${min}`);
        continue;
      }

      // Handle "X - Y"
      if (range.includes("-")) {
        const [minStr, maxStr] = range.split("-");
        const min = parseInt(minStr.replace(/,/g, "").trim(), 10);
        const max = parseInt(maxStr.replace(/,/g, "").trim(), 10);

        // notice: min → (min - 1)
        queries.push(`price_gte=${min - 1}&price_lte=${max}`);
      }
    }
    return queries.join("&");
  }
}

export { buildPriceQuery };

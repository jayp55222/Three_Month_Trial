import {
  setFirstIndex,
  setLastIndex,
} from "@/Redux-Toolkit/DataSlice/Pagination/PaginationSlice";

function getPaginationIndexes(currentPage, itemsPerPage, dispatch) {
  const firstIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = firstIndex + itemsPerPage - 1;
  dispatch(setFirstIndex(firstIndex));
  dispatch(setLastIndex(lastIndex));
}

export { getPaginationIndexes };

import { matchSorter } from "match-sorter";

export default function fuzzyTextFilter(rows, id, filterValue) {
  return matchSorter(rows, filterValue, { keys: [(row) => row.values[id]] });
}
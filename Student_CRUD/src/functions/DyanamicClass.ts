export function getHeaderClass(field: string): string {
  switch (field) {
    case "createdAt":
      return "text-black cursor-pointer";
    case "firstname":
      return "text-black cursor-pointer";
    case "lastname":
      return "text-black cursor-pointer hidden md:table-cell";
    case "gender":
      return "text-black cursor-pointer hidden sm:table-cell";
    case "birthday":
      return "text-black cursor-pointer hidden lg:table-cell";
    case "city":
      return "text-black cursor-pointer hidden sm:table-cell";
    case "state":
      return "text-black cursor-pointer";
    case "id":
      return "text-black cursor-pointer hidden md:table-cell";
    default:
      return "cursor-pointer";
  }
}

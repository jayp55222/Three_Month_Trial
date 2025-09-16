export function getHeaderClass(field: string): string {
  switch (field) {
    case "createdAt":
      return "text-black cursor-pointer";
    case "firstname":
      return "text-black cursor-pointer";
    case "lastname":
      return "text-black cursor-pointer hidden md:inline";
    case "gender":
      return "text-black cursor-pointer hidden lg:inline";
    case "birthday":
      return "text-black cursor-pointer hidden lg:block";
    case "city":
      return "text-black cursor-pointer";
    case "state":
      return "text-black cursor-pointer";
    case "id":
      return "text-black cursor-pointer";
    default:
      return "cursor-pointer";
  }
}

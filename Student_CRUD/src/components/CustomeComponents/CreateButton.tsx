import { Button } from "@/components/ui/button";
import { toggleform } from "@/services/booleanSlice";
import { Plus } from "lucide-react";
import { useDispatch } from "react-redux";

export function CreateButton() {
  const dispatch = useDispatch();
  return (
    <Button
      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 cursor-pointer"
      onClick={() => {
        dispatch(toggleform());
      }}
    >
      <Plus className="h-4 w-4" />
      Create
    </Button>
  );
}

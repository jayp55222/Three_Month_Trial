import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useDeleteStudentMutation } from "@/services/studentApi";
import toast from "react-hot-toast";

interface DeleteConfirmDialogProps {
  id: string;
  onClose: () => void;
  onConfirm: (id: string) => void; // use id when confirming
}

export default function DeleteConfirmDialog({
  id,
  onClose,
  onConfirm,
}: DeleteConfirmDialogProps) {
  // Delete mutation
  const [deleteStudent, { isError, isSuccess, isLoading: isDeleting }] =
    useDeleteStudentMutation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the item
            and remove its data from the system.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline" onClick={onClose} disabled={isDeleting}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={() =>
              deleteStudent(id)
                .unwrap()
                .then((fulfilled) => {
                  toast.success("Successfully Deleted!");
                  console.log(fulfilled);
                })
                .catch((rejected) => {
                  toast.success(rejected);
                  console.error(rejected);
                })
            }
            disabled={isDeleting}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

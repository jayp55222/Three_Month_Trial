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
import React from "react";

interface DeleteConfirmDialogProps {
  id: string;
}

export default function DeleteConfirmDialog({
  id
}: DeleteConfirmDialogProps) {
  // Delete mutation
  const [deleteStudent, { isError, isSuccess, isLoading: isDeleting }] =
    useDeleteStudentMutation();
    const [open, setOpen] = React.useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
          <Button variant="outline" onClick={() => setOpen(false)} disabled={isDeleting}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={() =>
              deleteStudent(id)
                .unwrap()
                .then((fulfilled) => {
                  setOpen(false); // close after success
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

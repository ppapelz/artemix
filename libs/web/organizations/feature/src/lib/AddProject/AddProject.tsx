import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@promptus/web-shared-ui';
import { AddProjectForm } from './AddProjectForm';

export function AddProject() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button> Add project </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='mb-2'>Add a new project</DialogTitle>
          <DialogDescription>
            <AddProjectForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddProject;

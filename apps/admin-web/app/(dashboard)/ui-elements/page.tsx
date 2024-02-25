import { Button } from '@promptus/web-shared-ui';
import { DataTableDemo } from '@promptus/web/ui-examples/ui-elements';
import { CardDemo } from '@promptus/web/ui-examples/ui-elements/server';

const UIElements = () => {
  return (
    <div className="flex space-x-4">
      <Button> Test Button </Button>
      <CardDemo />
      <DataTableDemo />
    </div>
  );
};

export default UIElements;

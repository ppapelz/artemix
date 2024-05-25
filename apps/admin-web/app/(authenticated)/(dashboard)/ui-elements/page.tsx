import { Button } from '@artemix/web-shared-ui';
import {
  CardDemo,
  SliderDemo,
  DataTableDemo,
} from '@artemix/web/ui-examples/ui-elements/server';

const UIElements = () => {
  return (
    <div className="space-y-4">
      <Button> Test Button </Button>
      <CardDemo />
      <SliderDemo />
      <DataTableDemo />
    </div>
  );
};

export default UIElements;

import { Button } from '@artemix/web-shared-ui';
import {
  CardDemo,
  SliderDemo,
  DataTableDemo,
} from 'libs/web/ui-elements/ui/src/server';

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
